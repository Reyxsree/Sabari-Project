document.addEventListener('DOMContentLoaded', () => {
  const hostForm = document.getElementById('hostForm');
  const coTravelerForm = document.getElementById('coTravelerForm');

  if (hostForm) {
    hostForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Host Registered Successfully!');
    });
  }

  if (coTravelerForm) {
    coTravelerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Co-Traveler Registered Successfully!');
    });
  }
});
