document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.querySelector('.form');
    const paymentButton = document.querySelector('.payment');

    // Function to handle form submission
    function handlePaymentSubmission(event) {
        event.preventDefault();

        // Get form input values
        const cardNumber = document.querySelector('#card-number').value;
        const expiryDate = document.querySelector('#expiry-date').value;
        const cvvCode = document.querySelector('#cvv-code').value;
        const cardHolderName = document.querySelector('#card-holder-name').value;

        // You can perform form validation here

        // Create an object with payment data
        const paymentData = {
            cardNumber,
            expiryDate,
            cvvCode,
            cardHolderName,
        };

        // Simulate a payment request (replace with actual payment gateway API call)
        // Here, we'll just log the payment data to the console
        console.log('Payment Data:', paymentData);

        // You can now send this paymentData to your payment gateway's API for processing
    }

    // Add event listener for form submission
    paymentForm.addEventListener('submit', handlePaymentSubmission);

    // Add event listener for payment button click
    paymentButton.addEventListener('click', function () {
        // Trigger form submission when the payment button is clicked
        paymentForm.submit();
    });
});
