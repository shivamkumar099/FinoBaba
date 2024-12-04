// Auth Modal functionality
function openAuthModal(type) {
    const modal = document.getElementById('authModal');
    const modalTitle = document.getElementById('modalTitle');
    const submitButton = modal.querySelector('button[type="submit"]');
    
    modalTitle.textContent = type === 'login' ? 'Login' : 'Register';
    submitButton.textContent = type === 'login' ? 'Login' : 'Register';
    
    modal.classList.add('active');
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.remove('active');
}

function handleAuth(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Add your authentication logic here
    console.log('Auth attempt:', { email, password });
    
    // For demo purposes, just close the modal
    closeAuthModal();
}

// Close modal when clicking outside
document.getElementById('authModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeAuthModal();
    }
});