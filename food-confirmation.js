document.addEventListener('DOMContentLoaded', function () {
    const centreButton = document.getElementById('centreButton');
    const locationButton = document.getElementById('locationButton');

    // Redirect to respective pages on button click
    centreButton.addEventListener('click', function () {
        // Redirect to the "centre-address.html" page when "Come to Our Centre" is clicked
        window.location.href = 'centre-address.html';
    });

    locationButton.addEventListener('click', function () {
        // Redirect to the "location-collection.html" page when "Collect from My Location" is clicked
        window.location.href = 'location-collection.html';
    });
});
