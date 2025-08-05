document.addEventListener('DOMContentLoaded', function() {
    
    // Gestion du header "collant"
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); // Classe non utilisée en CSS, mais conservée
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Navigation fluide vers les ancres
    const navLinks = document.querySelectorAll('header nav a, footer a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // **NOUVEAU** : Logique pour l'accordéon de la FAQ
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('.faq-question');
        button.addEventListener('click', () => {
            // Ferme tous les autres items ouverts
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Ouvre ou ferme l'item cliqué
            item.classList.toggle('active');
        });
    });

});
