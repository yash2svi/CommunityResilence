document.addEventListener('DOMContentLoaded', function () {
    const centreButton = document.getElementById('centreButton');
    const locationButton = document.getElementById('locationButton');
    const changeDonationButton = document.getElementById('changeDonationButton'); // Add this line

    // Redirect to respective pages on button click
    centreButton.addEventListener('click', function () {
        // Redirect to the "centre-address.html" page when "Come to Our Centre" is clicked
        window.location.href = 'centre-address.html';
    });

    locationButton.addEventListener('click', function () {
        // Redirect to the "location-collection.html" page when "Collect from My Location" is clicked
        window.location.href = 'location-collection.html';
    });

    // Add click event listener for "Change Donation Method" button
    changeDonationButton.addEventListener('click', function () {
        // Redirect to the "clothes-confirmation.html" page when "Change Donation Method" is clicked
        window.location.href = 'clothes-confirmation.html';
    });
});
