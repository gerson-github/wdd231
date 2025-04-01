// Atualização de informações dinâmicas
const currYear = (new Date).getFullYear();
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent += lastModified;
document.getElementById("currentYear").textContent = currYear;


//modal form
// Animate Cards
window.addEventListener("load", () => {
    // document.getElementById("cards").classList.add("show");
    document.getElementById("timestamp").value = new Date().toISOString();
});

// Open / Close Modals
function openModal(id){ document.getElementById(id).showModal(); }
function closeModal(id){ document.getElementById(id).close(); }


/* rotina para submeter o formulario  */
document.addEventListener("DOMContentLoaded", function () {

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

    const form = document.getElementById("form-application");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Captura os dados do formulário
        const formData = new FormData(form);
        formData.set("timestamp", new Date().toISOString()); // Define o timestamp

        // Constrói a query string para passar os dados via URL
        const queryString = new URLSearchParams(formData).toString();

        // Redireciona para a página de agradecimento com os dados do formulário
        window.location.href = `thankyou.html?${queryString}`;
    });
});
