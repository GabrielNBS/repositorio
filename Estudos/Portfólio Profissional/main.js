const header = document.querySelector('#headerFixed');
const heading = document.getElementById('menssageInvi');
const letters = heading.innerText.split('');

heading.innerText = '';

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    
    } else {
        header.classList.remove('scrolled');
    }
});

letters.forEach(letter => {
    const span = document.createElement('span');
    span.innerText = letter;
    heading.appendChild(span);
});

const spans = heading.querySelectorAll('span');
spans.forEach((span, index) => {
    span.style.animationDelay = `${index * 50}ms`;
});