// Typed.js Animation
document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typed-text', {
        strings: ['Frontend Developer', 'UI/UX Designer', 'Programmer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
});

// AOS Init
AOS.init({ duration: 1000, once: true });

// Tabs & Dynamic Images with Fade
function openTab(event, tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('hidden'));

    const links = document.querySelectorAll('.tab-link');
    links.forEach(link => {
        link.classList.remove('active');
        link.classList.remove('border-cyan-500');
        link.classList.add('border-transparent');
    });

    document.getElementById(tabName).classList.remove('hidden');
    event.currentTarget.classList.add('active');
    event.currentTarget.classList.add('border-cyan-500');
    event.currentTarget.classList.remove('border-transparent');

    const img = document.getElementById('tab-image');
    img.style.opacity = 0;
    setTimeout(() => {
        if(tabName === 'journey') img.src = '../Assests/journey.png';
        else if(tabName === 'technical-skills') img.src = '../Assests/techskill.png';
        else if(tabName === 'soft-skills') img.src = '../Assests/softskill.png';
        img.style.opacity = 1;
    }, 200);
}
