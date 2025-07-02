//active navigation red
document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname.replace(/\/$/, '').toLowerCase();

    console.log('CURRENT PATH:', currentPath);

    document.querySelectorAll('.navbar .nav-link[href]').forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '').toLowerCase();

        console.log('CHECK:', link.href, '=>', linkPath);

        if (
            (currentPath === '/' && linkPath === '/index.html') ||
            (currentPath === '/index.html' && linkPath === '/index.html') ||
            currentPath === linkPath
        ) {
            link.classList.add('active');
        }
    });
});


// Submenu
document.addEventListener('DOMContentLoaded', function () {
    var dropdownSub = document.querySelectorAll('.dropdown-submenu');

    dropdownSub.forEach(function (menu) {
        menu.addEventListener('mouseover', function () {
            var dropdown = menu.querySelector(".dropdown-menu");
            if (dropdown) {
                dropdown.classList.add('show');
            }
        });

        menu.addEventListener('mouseleave', function () {
            var dropdown = menu.querySelector('.dropdown-menu');
            if (dropdown) {
                dropdown.classList.remove('show');
            }
        })
    })
})