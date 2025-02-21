const currYear = (new Date()).getFullYear();
const lastModified = document.lastModified;

document.getElementById("lastModified").textContent += lastModified;
document.getElementById("currentYear").textContent = currYear;

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const heroImageContainer = document.querySelector(".hero-image-container");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        const navHeight = navLinks.offsetHeight;

        if (navLinks.classList.contains("show")) {
            heroImageContainer.style.marginTop = `${navHeight}px`;
        } else {
            heroImageContainer.style.marginTop = "0";
        }
    });
});

document.addEventListener("DOMContentLoaded", async () => {
    const businessDirectory = document.querySelector(".business-directory");
    const toggleViewButton = document.getElementById("toggle-view");

    toggleViewButton.addEventListener("click", () => {
        businessDirectory.classList.toggle("list-view");
        toggleViewButton.textContent = businessDirectory.classList.contains("list-view")
            ? "Switch to Grid View"
            : "Switch to List View";
    });

    async function loadBusinessData() {
        try {
            const response = await fetch("data/members.json");
            const data = await response.json();
            const members = data.members;

            businessDirectory.innerHTML = "";

            members.forEach(member => {
                const businessCard = document.createElement("div");
                businessCard.classList.add("business-card");

                businessCard.innerHTML = `
                    <h3>${member.name}</h3>
                    <p style="border-bottom: 1px solid gray; font-size: 12px; margin: 0; padding: 0;">
                        ${member.category}
                    </p>
                    <div class="business-card-detail">
                        <img src="images/${member.image}" alt="${member.name}" width="80">
                        <div>
                            <dl class="card-content">
                                <dt>EMAIL:</dt>
                                <dd><a href="mailto:${member.email || "#"}">${member.email || "N/A"}</a></dd>
                                <dt>PHONE:</dt>
                                <dd>${member.phone}</dd>
                                <dt>ADDRESS:</dt>
                                <dd>${member.address}</dd>
                                <dt>URL:</dt>
                                <dd><a href="${member.website}" target="_blank">${member.website}</a></dd>
                                <dt> </dt>
                                <dd><button class="button" >Learn More</button></dd>
                            </dl>
                        </div>
                    </div>
                `;

                businessDirectory.appendChild(businessCard);
            });
        } catch (error) {
            console.error("Error fetching business data:", error);
        }
    }

    loadBusinessData();
});


const lastVisit = localStorage.getItem("lastVisit");
        const messageElement = document.getElementById("message");

        if (lastVisit) {
            messageElement.textContent = `Welcome back! Your last visit was on ${lastVisit}.`;
        } else {
            messageElement.textContent = "Welcome! This is your first visit.";
        }

        // Store the current date as the new last visit
        const currentDate = new Date().toLocaleString();
        localStorage.setItem("lastVisit", currentDate);

//const currYear=(new Date).getFullYear(),lastModified=document.lastModified;document.getElementById("lastModified").textContent+=lastModified,document.getElementById("currentYear").textContent=currYear,document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".hamburger"),t=document.querySelector(".nav-links"),n=document.querySelector(".hero-image-container");e.addEventListener("click",(function(){t.classList.toggle("show");const e=t.offsetHeight;t.classList.contains("show")?n.style.marginTop=`${e}px`:n.style.marginTop="0"}))})),document.addEventListener("DOMContentLoaded",(async()=>{const e=document.querySelector(".business-directory"),t=document.getElementById("toggle-view");t.addEventListener("click",(()=>{e.classList.toggle("list-view"),t.textContent=e.classList.contains("list-view")?"Switch to Grid View":"Switch to List View"})),async function(){try{const n=await fetch("data/members.json"),d=await n.json();t=d.members,e.innerHTML="",t.forEach((t=>{const n=document.createElement("div");n.classList.add("business-card"),n.innerHTML=`\n                <h3>${t.name}</h3>\n                <p style="border-bottom: 1px solid gray; font-size: 12px; margin: 0; padding: 0;">${t.category}</p>\n                <div class="business-card-detail">\n                    <img src="images/${t.image}" alt="${t.name}" width="80">\n                    <div>\n                        <dl class="card-content">\n                            <dt>EMAIL:</dt>\n                            <dd><a href="mailto:${t.email||"#"}">${t.email||"N/A"}</a></dd>\n                            <dt>PHONE:</dt>\n                            <dd>${t.phone}</dd>\n                            <dt>URL:</dt>\n                            <dd><a href="${t.website}" target="_blank">${t.website}</a></dd>\n                        </dl>\n                    </div>\n                </div>\n            `,e.appendChild(n)}))}catch(e){}var t}()}));