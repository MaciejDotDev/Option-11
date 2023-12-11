document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Client-side validation
    const cardNumberRegex = /^\d{16}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{4}$/;
    const cvvRegex = /^\d{3}$/;

    if (!cardNumberRegex.test(cardNumber)) {
      alert("Invalid card number. Please enter a 16-digit card number.");
      return;
    }

    if (!expiryDateRegex.test(expiryDate)) {
      alert("Invalid expiry date. Please enter a valid date in MM/YYYY format.");
      return;
    }

    if (!cvvRegex.test(cvv)) {
      alert("Invalid CVV. Please enter a 3-digit CVV.");
      return;
    }

    // If all validations pass, proceed to submit the form
    // For example: post(route('addPayment'), data);
    console.log('Form submitted successfully!');
  });

  document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
  
    scrollToTopButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });