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

        if (selectedDonationType) {
            if (selectedDonationType === 'money') {
                // Redirect to "payment.html" when "Money" is selected
                window.location.href = 'payment.html';
            } else if (selectedDonationType === 'food') {
                // Redirect to "food-donation.html" when "Food" is selected
                window.location.href = 'food-donation.html';
            } else if (selectedDonationType === 'clothes') {
                // Redirect to "clothes-donation.html" when "Clothes" is selected
                window.location.href = 'clothes-donation.html';
            } else if (selectedDonationType === 'shelter') {
                // Redirect to "payment.html" when "Shelter" is selected
                window.location.href = 'payment.html';
            } else {
                alert('Invalid donation option.');
            }
        } else {
            alert('Please select a donation option.');
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
