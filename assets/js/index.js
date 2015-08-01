function offcanvasMenu() {
    var triggers = document.getElementsByClassName('menu-trigger');

    for (var i = 0; i < triggers.length; i++) {
        triggers[i].addEventListener("click", function() {
            var targetMenu = this.getAttribute('offcanvas-menu');
            toggleOffcanvasMenu(targetMenu);
        });
    }
}

function toggleOffcanvasMenu(menuId) {
    var myMenu = document.getElementById(menuId);

    myMenu.classList.toggle('open');

    var siteWrap = document.getElementsByClassName('wrapper')[0];
    siteWrap.classList.toggle('open');
}