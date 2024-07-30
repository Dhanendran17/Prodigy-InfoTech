document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

const navItems = document.querySelectorAll('.nav-item a');
navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#ff6347';
    });
    item.addEventListener('mouseout', () => {
        item.style.color = 'white';
    });
});
