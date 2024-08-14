// sidebar toggle

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar()  {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar");
        sidebarOpen = false;
    }
}