document.getElementById("sidebar-button").addEventListener("click", toggleSidebar);

function toggleSidebar(){
    let sidebar = document.getElementById("sidebar");
    let sidebarButton = document.getElementById("sidebar-button");
    let sidebarBarsIcon = document.getElementById("sidebar-bars-icon");
    let sidebarTimesIcon = document.getElementById("sidebar-times-icon");
    let logo = document.getElementById("logo");
    let sidebarOpen = sidebar.classList.contains("left-0");
    sidebarOpen ? closeSidebar(sidebar, sidebarButton, sidebarBarsIcon, sidebarTimesIcon, logo) : openSidebar(sidebar, sidebarButton, sidebarBarsIcon, sidebarTimesIcon, logo);
}

function openSidebar(sidebar, sidebarButton, sidebarBarsIcon, sidebarTimesIcon, logo){
    sidebar.classList.add("slide-in-left");
    sidebarButton.classList.add("dark-to-light");
    sidebarBarsIcon.classList.add("opacity-off");
    sidebarTimesIcon.classList.add("opacity-on");
    logo.classList.add("dark-to-light-logo");
    setTimeout(() => {
        sidebar.classList.replace("left-100", "left-0");
        sidebar.classList.remove("slide-in-left");
        sidebarButton.classList.replace("text-tpurple","text-tbeige");
        sidebarButton.classList.remove("dark-to-light");
        sidebarBarsIcon.classList.replace("opacity-100","opacity-0");
        sidebarBarsIcon.classList.remove("opacity-off");
        sidebarTimesIcon.classList.replace("opacity-0","opacity-100");
        sidebarTimesIcon.classList.remove("opacity-on");
        logo.classList.replace("dark-logo", "light-logo");
        logo.classList.remove("dark-to-light-logo");
    }, 400);
}

function closeSidebar(sidebar, sidebarButton, sidebarBarsIcon, sidebarTimesIcon, logo){
    sidebar.classList.add("slide-out-right");
    sidebarButton.classList.add("light-to-dark");
    sidebarBarsIcon.classList.add("opacity-on");
    sidebarTimesIcon.classList.add("opacity-off");
    logo.classList.add("light-to-dark-logo");
    setTimeout(() => {
        sidebar.classList.replace("left-0", "left-100");
        sidebar.classList.remove("slide-out-right");
        sidebarButton.classList.replace("text-tbeige","text-tpurple");
        sidebarButton.classList.remove("light-to-dark");
        sidebarBarsIcon.classList.replace("opacity-0","opacity-100");
        sidebarBarsIcon.classList.remove("opacity-on");
        sidebarTimesIcon.classList.replace("opacity-100","opacity-0");
        sidebarTimesIcon.classList.remove("opacity-off");
        logo.classList.replace("light-logo", "dark-logo");
        logo.classList.remove("light-to-dark-logo");
    }, 400);
}