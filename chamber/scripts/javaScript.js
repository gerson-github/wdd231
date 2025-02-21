const currYear = (new Date).getFullYear(),
      lastModified = document.lastModified;

document.getElementById("lastModified").textContent += lastModified;
document.getElementById("currentYear").textContent = currYear;

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger"),
          navLinks = document.querySelector(".nav-links"),
          heroImageContainer = document.querySelector(".hero-image-container");

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

document.addEventListener("DOMContentLoaded", async function () {
    const businessDirectory = document.querySelector(".business-directory"),
          toggleViewButton = document.getElementById("toggle-view");

    toggleViewButton.addEventListener("click", () => {
        businessDirectory.classList.toggle("list-view");
        toggleViewButton.textContent = businessDirectory.classList.contains("list-view")
            ? "Switch to Grid View" 
            : "Switch to List View";
    });

    async function loadBusinessData() {
        try {
            const response = await fetch("data/members.json"),
                  data = await response.json(),
                  members = data.members;

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
                                <dd><button class="button">Learn More</button></dd>
                            </dl>
                        </div>
                    </div>
                `;
                businessDirectory.appendChild(businessCard);
            });
        } catch (error) {
            console.error("Error loading business data:", error);
        }
    }

    loadBusinessData();
});

document.addEventListener("DOMContentLoaded", function() {
    const lastVisit = localStorage.getItem("lastVisit"),
          messageElement = document.getElementById("message");

        if (lastVisit) {
            messageElement.textContent = `Welcome back! Your last visit was on ${lastVisit}.`;
        } else {
            messageElement.textContent = "Welcome! This is your first visit.";
        }

    const currentDate = (new Date).toLocaleString();
    localStorage.setItem("lastVisit", currentDate);
});

