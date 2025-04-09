     // JavaScript for additional interactivity
     document.addEventListener('DOMContentLoaded', function() {
        // Add click effect to day cards
        const dayCards = document.querySelectorAll('.day-card');
        
        dayCards.forEach(card => {
            card.addEventListener('click', function() {
                // Toggle active class
                dayCards.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                
                // Scroll to center the card
                this.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        });
        
        // Animate cards on scroll
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        dayCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
        
        // Update motivational quote daily
        const quotes = [
            "The only bad workout is the one that didn't happen.",
            "Strength is the product of struggle.",
            "You don't have to be extreme, just consistent.",
            "The body achieves what the mind believes.",
            "Discipline is choosing between what you want now and what you want most.",
            "Success starts with self-discipline."
        ];
        
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date().getDay();
        const motivationElement = document.querySelector('.motivation');
        
        if (motivationElement) {
            motivationElement.innerHTML = `"${quotes[today]}"<br>- ${days[today]} Motivation`;
        }
    });