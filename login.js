document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function(event) {
      // Prevent default form submission
      event.preventDefault();
      
      // Reset previous validation states
      form.classList.remove('was-validated');
      
      // Check form validity
      if (form.checkValidity()) {
          // If all validations pass, show success message
          form.style.display = 'none';
          successMessage.style.display = 'block';
      } else {
          // Mark form as validated to show error messages
          form.classList.add('was-validated');
      }
  });

  // Additional custom validations
  const contactNumberInput = document.getElementById('contactNumber');
  contactNumberInput.addEventListener('input', function() {
      // Validate contact number (10 digits only)
      const isValid = /^\d{10}$/.test(contactNumberInput.value);
      contactNumberInput.setCustomValidity(isValid ? '' : 'Invalid contact number');
  });

  const emailInput = document.getElementById('email');
  emailInput.addEventListener('input', function() {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(emailInput.value);
      emailInput.setCustomValidity(isValid ? '' : 'Invalid email address');
  });

  const passwordInput = document.getElementById('password');
  passwordInput.addEventListener('input', function() {
      // Ensure password is at least 6 characters
      const isValid = passwordInput.value.length >= 6;
      passwordInput.setCustomValidity(isValid ? '' : 'Password must be at least 6 characters');
  });
});