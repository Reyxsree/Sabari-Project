hostForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value,
    email: document.getElementById('email').value,
    vehicleType: document.getElementById('vehicleType').value,
    vehicleModel: document.getElementById('vehicleModel').value,
  };
  
  fetch('http://localhost:3000/register-host', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => alert(data.message))
  .catch(error => console.error('Error:', error));
});
