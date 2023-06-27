function observeScroll() {
    const header = document.getElementsByTagName('header')[0]; // Acesso ao primeiro elemento da coleção

    function addClassScrolling() {
        if (window.scrollY > 0) {
            header.classList.add('scrolling');
        } else {
            header.classList.remove('scrolling');
        }
    }

    window.addEventListener('scroll', addClassScrolling);
}

observeScroll();
