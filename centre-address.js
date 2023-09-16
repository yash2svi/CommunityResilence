document.addEventListener('DOMContentLoaded', function () {
    // Find the link element by its ID
    const changeDonationLink = document.getElementById('changeDonationLink');

    // Add a click event listener to the link
    changeDonationLink.addEventListener('click', function (event) {
        // Prevent the default link behavior (opening a new page)
        event.preventDefault();
        
        // Redirect back to the "food-confirmation.html" page
        window.location.href = 'food-confirmation.html';
    });
});
