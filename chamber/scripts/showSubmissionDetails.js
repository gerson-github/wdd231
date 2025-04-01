document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);

    // Ativar item de menu
    const navItems = document.querySelectorAll("nav ul li");
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navItems.forEach(i => i.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Botão de toggle do menu
    const menuButton = document.querySelector("header button");
    const nav = document.querySelector("nav");
    menuButton.addEventListener("click", () => 
    {
        nav.classList.toggle("open");
    });

    document.getElementById("firstName").textContent = params.get("firstName") || "N/A";
    document.getElementById("lastName").textContent = params.get("lastName") || "N/A";
    document.getElementById("email").textContent = params.get("email") || "N/A";
    document.getElementById("phone").textContent = params.get("phone") || "N/A";
    document.getElementById("businessName").textContent = params.get("businessName") || "N/A";
    document.getElementById("timestamp").textContent = params.get("timestamp") || "N/A";
});
