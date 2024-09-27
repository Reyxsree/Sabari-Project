// Existing JavaScript code

// Add the following Google Maps related code
let map, startMarker, endMarker, directionsService, directionsRenderer;

function initMap() {
    const mapOptions = {
        zoom: 12,
        center: { lat: 12.9716, lng: 77.5946 }, // Example center: Bangalore, India
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    map.addListener('click', function (event) {
        if (!startMarker) {
            startMarker = addMarker(event.latLng, "Start");
        } else if (!endMarker) {
            endMarker = addMarker(event.latLng, "End");
            calculateAndDisplayRoute();
        } else {
            startMarker.setMap(null);
            endMarker.setMap(null);
            startMarker = addMarker(event.latLng, "Start");
            endMarker = null;
            document.getElementById('distance').innerText = "";
            document.getElementById('plan').innerText = "";
        }
    });
}

function addMarker(location, title) {
    return new google.maps.Marker({
        position: location,
        map: map,
        title: title,
    });
}

function calculateAndDisplayRoute() {
    const start = startMarker.getPosition();
    const end = endMarker.getPosition();

    const request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, function (result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);

            const distance = result.routes[0].legs[0].distance.value / 1000; // in km
            document.getElementById('distance').innerText = distance.toFixed(2);

            let plan = "";
            if (distance <= 10) {
                plan = "Below 10km";
            } else if (distance <= 20) {
                plan = "Below 20km";
            } else {
                plan = "Above 20km";
            }
            document.getElementById('plan').innerText = plan;
        } else {
            alert("Could not calculate route: " + status);
        }
    });
}

// Initialize the map when the page loads
window.onload = initMap;
