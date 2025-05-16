export function setupFormValidation() {
  const contactForm = document.getElementById('contact-form');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorElements = document.querySelectorAll('.error-message');
    
    // Clear previous error messages
    errorElements.forEach(el => el.textContent = '');
    
    // Validate name
    if (!nameInput.value.trim()) {
      document.getElementById('name-error').textContent = 'Nama wajib diisi';
      nameInput.classList.add('border-red-500');
      return;
    } else {
      nameInput.classList.remove('border-red-500');
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
      document.getElementById('email-error').textContent = 'Email tidak valid';
      emailInput.classList.add('border-red-500');
      return;
    } else {
      emailInput.classList.remove('border-red-500');
    }
    
    // Validate message
    if (!messageInput.value.trim()) {
      document.getElementById('message-error').textContent = 'Pesan wajib diisi';
      messageInput.classList.add('border-red-500');
      return;
    } else {
      messageInput.classList.remove('border-red-500');
    }
    
    // Form is valid - would normally submit to server here
    const successMessage = document.getElementById('form-success');
    successMessage.classList.remove('hidden');
    contactForm.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 5000);
  });
}