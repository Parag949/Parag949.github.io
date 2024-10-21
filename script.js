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

    // Show current tab content and add "active" class to clicked button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Open Software tab by default
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-btn").click();
});