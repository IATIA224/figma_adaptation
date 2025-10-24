        // ========================================
    // Login Form Validation & Handler
    // ========================================

    document.addEventListener('DOMContentLoaded', function() {
        const loginForm = document.getElementById('loginForm');
        const studentIdInput = document.getElementById('studentId');
        const passwordInput = document.getElementById('password');

        // Form submission handler
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get input values
            const studentId = studentIdInput.value.trim();
            const password = passwordInput.value.trim();

            // Validation
            if (!studentId) {
                showError(studentIdInput, 'Please enter your Student ID');
                return;
            }

            if (!password) {
                showError(passwordInput, 'Please enter your password');
                return;
            }

            // Simulate login process
            handleLogin(studentId, password);
        });

        // Clear error on input
        studentIdInput.addEventListener('input', function() {
            clearError(this);
        });

        passwordInput.addEventListener('input', function() {
            clearError(this);
        });

        // Function to handle login
        function handleLogin(studentId, password) {
            // Show loading state
            const loginButton = loginForm.querySelector('.btn-login');
            const originalText = loginButton.textContent;
            loginButton.textContent = 'Logging in...';
            loginButton.disabled = true;

            // Simulate API call (replace with actual API endpoint)
            setTimeout(() => {
                // This is a demo - in production, validate against actual backend
                if (studentId && password) {
                    // Success - redirect or show success message
                    alert('Login successful! Welcome, ' + studentId);
                    // window.location.href = 'dashboard.html'; // Redirect to dashboard
                } else {
                    // Error handling
                    showError(passwordInput, 'Invalid credentials');
                }

                // Reset button
                loginButton.textContent = originalText;
                loginButton.disabled = false;
            }, 1500);
        }

        // Function to show error
        function showError(input, message) {
            clearError(input);
            
            input.style.borderColor = '#EF4444';
            input.style.backgroundColor = '#FEF2F2';
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = message;
            errorDiv.style.color = '#EF4444';
            errorDiv.style.fontSize = '0.875rem';
            errorDiv.style.marginTop = '0.25rem';
            
            input.parentElement.appendChild(errorDiv);
        }

        // Function to clear error
        function clearError(input) {
            input.style.borderColor = '#D1D5DB';
            input.style.backgroundColor = '#FFFFFF';
            
            const errorMessage = input.parentElement.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
        }

        // ========================================
        // Navigation Enhancement
        // ========================================
        
        // Add smooth transitions for navigation links
        const navLinks = document.querySelectorAll('.nav-link, .nav-link-login');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
            });
        });

        // Add ripple effect to buttons
        const buttons = document.querySelectorAll('.btn-login, .btn-signup');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                ripple.style.width = ripple.style.height = '100px';
                ripple.style.marginLeft = ripple.style.marginTop = '-50px';
                ripple.style.animation = 'ripple 0.6s';
                ripple.style.left = e.clientX - button.getBoundingClientRect().left + 'px';
                ripple.style.top = e.clientY - button.getBoundingClientRect().top + 'px';
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // ========================================
        // Input Focus Animation
        // ========================================
        
        const formInputs = document.querySelectorAll('.form-input');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.querySelector('.form-label').style.color = '#6366F1';
            });

            input.addEventListener('blur', function() {
                this.parentElement.querySelector('.form-label').style.color = '#1F2937';
            });
        });
    });

    // CSS Animation for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            from {
                opacity: 1;
                transform: scale(0);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
        
        .btn-login, .btn-signup {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
