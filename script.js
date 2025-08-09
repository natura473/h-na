// Scroll animation
window.addEventListener('scroll', () => {
    const header = document.querySelector('.anime-header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Anime card hover effect
const animeCards = document.querySelectorAll('.anime-card');
animeCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const x = e.clientX - card.getBoundingClientRect().left;
        const y = e.clientY - card.getBoundingClientRect().top;
        
        card.style.transform = `translateY(-10px) rotateX(${(y - 150) / 20}deg) rotateY(${(x - 150) / 20}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-10px) rotateX(0) rotateY(0)';
    });
});