document.getElementById("sidebar-button").addEventListener("click", toggleSidebar);

function toggleSidebar(){
    let sidebar = document.getElementById("sidebar");
    let sidebarButton = document.getElementById("sidebar-button");
    let sidebarBarsIcon = document.getElementById("sidebar-bars-icon");
    let sidebarTimesIcon = document.getElementById("sidebar-times-icon");
    let logo = document.getElementById("logo");
    let sidebarOpen = sidebar.classList.contains("left-0");

    sidebar.classList.add(words("slide-in-left",sidebarOpen));
    sidebarButton.classList.add(words("dark-to-light-spin",sidebarOpen));
    sidebarBarsIcon.classList.add(words("opacity-off",sidebarOpen));
    sidebarTimesIcon.classList.add(words("opacity-on",sidebarOpen));
    logo.classList.add(words("dark-to-light",sidebarOpen));
    
    setTimeout(() => {
        sidebar.classList.replace(words("left-100",sidebarOpen), words("left-0",sidebarOpen));
        sidebarButton.classList.replace(words("text-tpurple",sidebarOpen),words("text-tbeige",sidebarOpen));
        sidebarBarsIcon.classList.replace(words("opacity-100",sidebarOpen),words("opacity-0",sidebarOpen));
        sidebarTimesIcon.classList.replace(words("opacity-0",sidebarOpen),words("opacity-100",sidebarOpen));
        logo.classList.replace(words("text-tpurple",sidebarOpen), words("text-tbeige",sidebarOpen));

        sidebar.classList.remove(words("slide-in-left",sidebarOpen));
        sidebarButton.classList.remove(words("dark-to-light-spin",sidebarOpen));
        sidebarBarsIcon.classList.remove(words("opacity-off",sidebarOpen));
        sidebarTimesIcon.classList.remove(words("opacity-on",sidebarOpen));
        logo.classList.remove(words("dark-to-light",sidebarOpen));
    }, 400);
}

function words(str, opposite){
    if (!opposite){return str;}
    let opposites = [ "slide-in-left", "slide-out-right"
                    , "dark-to-light", "light-to-dark"
                    , "dark-to-light-spin", "light-to-dark-spin"
                    , "opacity-off", "opacity-on"
                    , "opacity-100", "opacity-0"
                    , "left-100", "left-0"
                    , "text-tpurple", "text-tbeige"
                    ]
    let index = opposites.findIndex(strr => strr == str);
    let newIndex = Math.floor(index / 2) * 2
    if (index % 2 == 0){newIndex++;}
    return opposites[newIndex];
}