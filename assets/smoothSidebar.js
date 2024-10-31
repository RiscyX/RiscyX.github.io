function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add("open");
    const logo = document.querySelector('.logo');
    screen.width < 450 ? logo.style.display = 'none' : null;
    const active_sidebar = document.querySelector('#sidebar_active');
    active_sidebar.classList.add('active');
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove("open");
    const logo = document.querySelector('.logo');
    screen.width < 450 ? logo.style.display = 'block' : null;
    const active_sidebar = document.querySelector('#sidebar_active');
    active_sidebar.classList.remove('active');
}
function navigateWithAnimation(link) {
    const sidebar = document.querySelector('.sidebar');

    sidebar.classList.add('hidden');

    setTimeout(() => {
        window.location.href = link;
    }, 300);
}

const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        navigateWithAnimation(href);
    });
});
