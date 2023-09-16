document.addEventListener('DOMContentLoaded', function () {
    const addressForm = document.getElementById('addressForm');
    const submitButton = document.getElementById('submitButton');
    const confirmationBox = document.getElementById('confirmationBox');

    // Add a submit event listener to the form
    addressForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        
        // Display the confirmation box
        confirmationBox.style.display = 'block';

        // Scroll to the confirmation box
        window.scrollTo({
            top: confirmationBox.offsetTop,
            behavior: 'smooth',
        });
    });
});
