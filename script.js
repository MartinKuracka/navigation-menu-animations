const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

const animateMenu = (dir1, dir2) => {
    navItems.map((nav, i) => {
        nav.classList.replace(`slide-${dir1}-${i+1}`, `slide-${dir2}-${i+1}`);
    })
}

const toggleNav = () => {
    // toggle Menu Bars open/close
    menuBars.classList.toggle('change');
    // Toggle the Menu active/inactive
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate in Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        // animate In Nav Items
        animateMenu('out', 'in');
    } else {
        // Animate Out overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
        // animate Out nav Items
        animateMenu('in', 'out');
    }
}

// Event listeners
menuBars.addEventListener('click', toggleNav);
navItems.map((nav, i) => {
    nav.addEventListener('click', toggleNav)
});
