document.querySelectorAll("#accessibility-menu .skip-link").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href").slice(1);
        const target = document.getElementById(id);
        target.setAttribute("tabindex", "-1");
        target.focus();
    });
});
