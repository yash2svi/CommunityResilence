document.addEventListener('DOMContentLoaded', function () {
    const clothesDonationForm = document.getElementById('clothesDonationForm');
    const clothesDonateButton = document.getElementById('clothesDonateButton');

    clothesDonateButton.addEventListener('click', function () {
        // Check which clothes items are selected
        const selectedClothesItems = Array.from(clothesDonationForm.querySelectorAll('input[name="clothesItem"]:checked'))
            .map(item => item.value);

        if (selectedClothesItems.length === 0) {
            alert('Please select at least one clothes item to donate.');
        } else {
            // Redirect to the confirmation page (clothes-confirmation.html)
            window.location.href = 'clothes-confirmation.html';
        }
    });
});
