document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline li");

    function checkItems() {
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                item.style.opacity = 1;
                item.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkItems);
    checkItems(); // Run once on load
});