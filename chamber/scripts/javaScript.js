
const currYear = (new Date).getFullYear(),
    lastModified = document.lastModified;

document.getElementById("lastModified").textContent += lastModified;
document.getElementById("currentYear").textContent = currYear;

document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelector(".hamburger"),
        t = document.querySelector(".nav-links"),
        // n = document.querySelector(".hero-image-container");
        n = document.querySelector(".banner");

    e.addEventListener("click", function () {
        t.classList.toggle("show");
        const e = t.offsetHeight;
        if (t.classList.contains("show")) {
            n.style.marginTop = `${e}px`;
        } else {
            n.style.marginTop = "0";
        }
    });
});

document.addEventListener("DOMContentLoaded", async function () {
    const e = document.querySelector(".business-directory"),
        t = document.getElementById("toggle-view");

    t.addEventListener("click", function () {
        e.classList.toggle("list-view");
        t.textContent = e.classList.contains("list-view") ? "Switch to Grid View" : "Switch to List View";
    });

    async function loadBusinessDirectory() {
        try {
            const n = await fetch("data/members.json"),
                d = await n.json();
            const members = d.members;
            e.innerHTML = "";

            members.forEach(function (member) {
                const n = document.createElement("div");
                n.classList.add("business-card");
                n.innerHTML = `
                    <h3>${member.name}</h3>
                    <p style="border-bottom: 1px solid gray; font-size: 12px; margin: 0; padding: 0;">${member.category}</p>
                    <div class="business-card-detail">
                        <img src="images/${member.image}" alt="${member.name}" width="80">
                        <div>
                            <dl class="card-content">
                                <dt>EMAIL:</dt>
                                <dd><a href="mailto:${member.email || "#"}">${member.email || "N/A"}</a></dd>
                                <dt>PHONE:</dt>
                                <dd>${member.phone}</dd>
                                <dt>URL:</dt>
                                <dd><a href="${member.website}" target="_blank">${member.website}</a></dd>
                            </dl>
                        </div>
                    </div>
                `;
                e.appendChild(n);
            });
        } catch (e) {
            console.error("Error fetching business directory data", e);
        }
    }

    loadBusinessDirectory();
});

document.getElementById("connectButton").addEventListener("click", function () {
    document.getElementById("banner-text-title").textContent = "Connect.";
    document.getElementById("banner-text-description").textContent = "Chamber events give you a chance to gain new connections, learn more skills, and broaden your supplier and customer base.";
});

document.getElementById("growButton").addEventListener("click", function () {
    document.getElementById("banner-text-title").textContent = "Grow.";
    document.getElementById("banner-text-description").textContent = "Expand your network and business through the resources provided at chamber events. Growth comes with every opportunity.";
});

document.getElementById("advocateButton").addEventListener("click", function () {
    document.getElementById("banner-text-title").textContent = "Advocate.";
    document.getElementById("banner-text-description").textContent = "Advocate for your business and community, making meaningful contributions to the chamber and its initiatives.";
});


// const currYear = (new Date).getFullYear(), lastModified = document.lastModified; document.getElementById("lastModified").textContent += lastModified, document.getElementById("currentYear").textContent = currYear, document.addEventListener("DOMContentLoaded", (function () { const e = document.querySelector(".hamburger"), t = document.querySelector(".nav-links"), n = document.querySelector(".hero-image-container"); e.addEventListener("click", (function () { t.classList.toggle("show"); const e = t.offsetHeight; t.classList.contains("show") ? n.style.marginTop = `${e}px` : n.style.marginTop = "0" })) })), document.addEventListener("DOMContentLoaded", (async () => { const e = document.querySelector(".business-directory"), t = document.getElementById("toggle-view"); t.addEventListener("click", (() => { e.classList.toggle("list-view"), t.textContent = e.classList.contains("list-view") ? "Switch to Grid View" : "Switch to List View" })), async function () { try { const n = await fetch("data/members.json"), d = await n.json(); t = d.members, e.innerHTML = "", t.forEach((t => { const n = document.createElement("div"); n.classList.add("business-card"), n.innerHTML = `\n                <h3>${t.name}</h3>\n                <p style="border-bottom: 1px solid gray; font-size: 12px; margin: 0; padding: 0;">${t.category}</p>\n                <div class="business-card-detail">\n                    <img src="images/${t.image}" alt="${t.name}" width="80">\n                    <div>\n                        <dl class="card-content">\n                            <dt>EMAIL:</dt>\n                            <dd><a href="mailto:${t.email || "#"}">${t.email || "N/A"}</a></dd>\n                            <dt>PHONE:</dt>\n                            <dd>${t.phone}</dd>\n                            <dt>URL:</dt>\n                            <dd><a href="${t.website}" target="_blank">${t.website}</a></dd>\n                        </dl>\n                    </div>\n                </div>\n            `, e.appendChild(n) })) } catch (e) { } var t }() }));
