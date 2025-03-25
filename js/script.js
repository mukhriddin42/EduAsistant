let leftSidebarBtn = document.querySelector(".sidebar-btn-sidebar");

console.log(leftSidebarBtn);

function closeSidebar() {
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector(".sidebar-btn-main").style.display = "inline-block";
}

function openSidebar() {
    document.querySelector(".sidebar").style.display = "inline-block";
    document.querySelector(".sidebar-btn-main").style.display = "none";
}