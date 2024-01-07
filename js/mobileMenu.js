document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('nav-icon3');
    const menu = document.getElementById('menu');

    toggleBtn.addEventListener('click', function () {
        const menuWidth = menu.offsetWidth;

        if (parseInt(menu.style.left) < 0 || menu.style.left === '') {
            menu.style.left = '0';
            toggleBtn.classList.add('open');
            document.body.style.overflow = 'hidden';
        } else {
            menu.style.left = `-${menuWidth}px`;
            toggleBtn.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
});




