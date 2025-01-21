// Script pour rendre la navigation plus interactive
window.addEventListener("scroll", () => {
    const header = document.querySelector(".main-header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#4b3832";
    } else {
        header.style.backgroundColor = "#6f4e37";
    }
});
