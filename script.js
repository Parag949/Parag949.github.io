// Hamburger toggle for mobile view with animation
const hamburgerIcon = document.getElementById("hamburger-icon");
const navTabs = document.getElementById("nav-tabs");

hamburgerIcon.addEventListener("click", function() {
    if (navTabs.classList.contains("show")) {
        navTabs.classList.remove("show");
        navTabs.classList.add("hide");
    } else {
        navTabs.classList.remove("hide");
        navTabs.classList.add("show");
    }
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all buttons
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the clicked tab and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Show default tab
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-btn").click();
});
