document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn");

    closeBtn.addEventListener("click", function() {
        sidebar.style.left = "-250px";
    });

    // Change footer color on scroll
    window.addEventListener("scroll", function() {
        const footer = document.querySelector(".footer");
        if (window.scrollY > 100) {
            footer.style.backgroundColor = "#222";
        } else {
            footer.style.backgroundColor = "#111";
        }
    });
});
