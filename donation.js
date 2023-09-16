document.addEventListener('DOMContentLoaded', function () {
    const donationForm = document.getElementById('donationForm');
    const donateButton = document.getElementById('donateButton');

    // Function to get the selected donation option
    function getSelectedDonationOption() {
        const selectedOption = document.querySelector('input[name="donationType"]:checked');
        return selectedOption ? selectedOption.value : null;
    }

    // Function to handle the Donate button click
    function handleDonateButtonClick() {
        const selectedDonationType = getSelectedDonationOption();

        if (selectedDonationType === 'money') {
            // Redirect to the payment gateway with the selected donation type
            window.location.href = `payment.html?donationType=${selectedDonationType}`;
        } else {
            // Handle other donation types (e.g., food, clothes, shelter)
            // You can add custom logic or leave it empty for the default behavior
        }
    }

    // Add event listeners
    donateButton.addEventListener('click', handleDonateButtonClick);

    // Add event listener to allow form submission by pressing Enter key
    donationForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        handleDonateButtonClick();
    });
});
