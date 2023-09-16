document.addEventListener('DOMContentLoaded', function () {
    const foodDonationForm = document.getElementById('foodDonationForm');
    const confirmButton = document.getElementById('confirmButton');

    confirmButton.addEventListener('click', function () {
        // Check which food items are selected
        const selectedFoodItems = Array.from(foodDonationForm.querySelectorAll('input[name="foodItem"]:checked'))
            .map(item => item.value);

        if (selectedFoodItems.length === 0) {
            alert('Please select at least one food item.');
        } else {
            // Redirect to the confirmation page (food-confirmation.html)
            window.location.href = 'food-confirmation.html';
        }
    });
});
