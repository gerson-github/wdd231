const currYear = (new Date).getFullYear(),
      lastModified = document.lastModified;

document.getElementById("lastModified").textContent += lastModified;
document.getElementById("currentYear").textContent = currYear;

//active menu
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li");

    navLinks.forEach(link => 
    {
        link.addEventListener("click", function() 
        {
            navLinks.forEach(nav => { nav.classList.remove("active")});
            this.classList.add("active");
        });
    });
});

//hamburger button
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("header button");
    const nav = document.querySelector("nav");

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("open"); 
    });
});


document.addEventListener("DOMContentLoaded", async function () 
{
    const businessDirectory = document.querySelector(".business-directory");
    const listView = document.getElementById("list-view");

    toggleViewButton = document.getElementById("toggle-view");

    toggleViewButton.addEventListener("click", () => {

        businessDirectory.classList.toggle("list-view");

        businessDirectory.innerHTML = "";
        listView.innerHTML = "";

        if (businessDirectory.classList.contains("list-view")) {
            toggleViewButton.textContent = "Switch to Card View";
            loadBusinessDataList();
            
        } else {
            toggleViewButton.textContent = "Switch to List View";    
            loadBusinessData();
        }
    });

    async function loadBusinessDataList()
    {
        try {
            const response = await fetch("data/members.json"),
            data = await response.json(),
            members = data.members;

            const businessTable = document.createElement("table");
            
            businessTable.innerHTML = `
                        <table >
                            <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Type</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>`;
            
            const tbody = businessTable.querySelector("tbody");

            members.forEach(member => 
            {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td data-label="Company Name">${member.name}</td>
                    <td data-label="Type">${member.category}</td>
                    <td data-label="Email"><a href="mailto:${member.email || "#"}">${member.email || "N/A"}</a></td>
                    <td data-label="Phone">${member.phone}</td>
                    <td data-label="Address">${member.address}</td>
                    <td data-label="Website"><a href="${member.website}" target="_blank">Visit</a></td>
                `;
                tbody.appendChild(row);
            });

            listView.appendChild(businessTable);
 

        } catch (error)
        {
            console.error("Error loading table:", error)
        }
    }

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
                        <img src="images/${member.image}" alt="${member.name}" width="80" loading="lazy">
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
            console.error("Error loading data:", error);
        }
    }

    
     loadBusinessData();

    
});

// async function fcLastVisit() {
//     const lastVisit = localStorage.getItem("lastVisit");
//     const messageElement = document.getElementById("message-last-visit");

//     if (lastVisit) {
//         messageElement.textContent = `Welcome back! Your last visit was on ${lastVisit}.`;
//     } else {
//         messageElement.textContent = "Welcome! This is your first visit.";
//     }

//     // Simulate an async operation for illustration (e.g., fetching data, waiting for a response)
//     const currentDate = (new Date()).toLocaleString();
//     await new Promise(resolve => setTimeout(resolve, 1000));  // Simulate delay (optional)

//     localStorage.setItem("lastVisit", currentDate);
// }

// // Function to wait for 10 seconds and then call the fcLastVisit function
// function callAfterDelay() {
//     setTimeout(async () => {
//         await fcLastVisit();  // Call the async function after 10 seconds
//     }, 10000);  // 10 seconds delay (10000 milliseconds)
// }

// // Ensure the DOM is fully loaded before executing the function
// document.addEventListener('DOMContentLoaded', () => {
//     callAfterDelay();  // Start the timer to call the function after 10 seconds
// });



// function fcLastVisit() {
//     const lastVisit = localStorage.getItem("lastVisit"),
//     messageElement = document.getElementById("message-last-visit");

//     if (lastVisit) {
//     messageElement.textContent = `Welcome back! Your last visit was on ${lastVisit}.`;
//     } else {
//     messageElement.textContent = "Welcome! This is your first visit.";
//     }

//     const currentDate = (new Date()).toLocaleString();
//     localStorage.setItem("lastVisit", currentDate);
// }


// document.addEventListener('DOMContentLoaded', fcLastVisit());



