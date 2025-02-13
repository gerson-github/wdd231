// Get current year and last modified date
const currYear = (new Date()).getFullYear();
const lastModified = document.lastModified;

document.getElementById("lastModified").textContent += lastModified;
document.getElementById("currentYear").textContent = currYear;

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const heroImage = document.querySelector(".hero-image-container");

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show"); // Toggle menu visibility

        // Calculate the height of the nav-links when opened
        const navLinksHeight = navLinks.offsetHeight;

        // Adjust the margin-top of the hero image
        if (navLinks.classList.contains("show")) {
            heroImage.style.marginTop = `${navLinksHeight}px`; // Push the image down
        } else {
            heroImage.style.marginTop = "0"; // Reset the image position
        }
    });
});

document.addEventListener("DOMContentLoaded", async () => {
    const directory = document.querySelector(".business-directory");
    const toggleBtn = document.getElementById("toggle-view");

    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            const data = await response.json();
            displayMembers(data.members);
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    function displayMembers(members) {
        directory.innerHTML = ""; // Clear previous content

        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("business-card");

            card.innerHTML =`
                <h3>${member.name}</h3>
                <p style="border-bottom: 1px solid gray; font-size: 12px; margin: 0; padding: 0;">${member.category}</p>
                <div class="business-card-detail">
                    <img src="images/${member.image}" alt="${member.name}" width="80">
                    <div>
                        <dl class="card-content">
                            <dt>EMAIL:</dt>
                            <dd><a href="mailto:${member.email || '#'}">${member.email || "N/A"}</a></dd>
                            <dt>PHONE:</dt>
                            <dd>${member.phone}</dd>
                            <dt>URL:</dt>
                            <dd><a href="${member.website}" target="_blank">${member.website}</a></dd>
                        </dl>
                    </div>
                </div>
            `;

            directory.appendChild(card);
        });
    }

    // Toggle grid or list view
    toggleBtn.addEventListener("click", () => {
        directory.classList.toggle("list-view");
        toggleBtn.textContent = directory.classList.contains("list-view") ? "Switch to Grid View" : "Switch to List View";
    });

    fetchMembers(); // Load members on page load
});


