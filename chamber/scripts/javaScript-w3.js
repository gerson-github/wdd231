// Atualização de informações dinâmicas
const currYear = (new Date).getFullYear();
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent += lastModified;
document.getElementById("currentYear").textContent = currYear;

function getRandomMembers(members, count) {
    return members.sort(() => 0.5 - Math.random()).slice(0, count);
}

const toggleViewButton = document.getElementById("toggle-view");

const isIndexPage = location.pathname.endsWith("index.html") || location.pathname === "/";

// Evento ao carregar o DOM
document.addEventListener("DOMContentLoaded", () => {

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


    // Diretório de negócios
    let directory = document.querySelector(".business-directory");
    let listViewContainer = document.getElementById("list-view");

    // Função para carregar o modo card
    async function loadCardView() {
        try {

            const response = await fetch("data/members.json");
            const data = await response.json();
            let members = data.members;
            
            if (isIndexPage) {
                members = getRandomMembers(members,3);
            }

            if (listViewContainer) {listViewContainer.innerHTML = ""};
            if (directory) { directory.innerHTML = ""};

            members.forEach(member => {
                const card = document.createElement("div");
                card.classList.add("business-card");
                card.innerHTML = `
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
                                <dt></dt>
                                <dd><button class="button">Learn More</button></dd>
                            </dl>
                        </div>
                    </div>
                `;
                directory.appendChild(card);
            });
        } catch (error) {
            console.log("Erro ao carregar o card view", error);
        }
    }

    // Função para carregar o modo list
    async function loadListView() {
        try {
            const response = await fetch("data/members.json");
            const data = await response.json();
            
            if (listViewContainer) {listViewContainer.innerHTML = ""};
            if (directory) { directory.innerHTML = ""};

            const table = document.createElement("table");
            table.innerHTML = `
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
                <tbody></tbody>
            `;

            const tbody = table.querySelector("tbody");

            data.members.forEach(member => {
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

            listViewContainer.appendChild(table);
        } catch (error) {
            console.error("Erro ao carregar o list view", error);
        }
    }

    // Botão para alternar entre Card e List
    if (toggleViewButton)
    {
        toggleViewButton.addEventListener("click", () => {
            directory.classList.toggle("list-view");
            if (directory.classList.contains("list-view")) {
                toggleViewButton.textContent = "Switch to Card View";
                loadListView();
            } else {
                toggleViewButton.textContent = "Switch to List View";
                loadCardView();
            }
        });
    }

    // Carregar o modo inicial
    loadCardView();
});


//lendo api do tempo
document.addEventListener("DOMContentLoaded", async () => {
    const apiKey = "9085b3b21530cca83ec19fa4f9cfd2ed";
    const city = "Victoria";
    const country = "CA";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;

    // API URL for 5-day forecast
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch weather data");
        const data = await response.json();

        // Extract required data
        const temp = Math.round(data.main.temp);
        const high = Math.round(data.main.temp_max);
        const low = Math.round(data.main.temp_min);
        const humidity = data.main.humidity;
        const condition = data.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        // Convert sunrise/sunset times from UNIX timestamp
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Insert into HTML
       // document.querySelector(".weather-icon").src = icon;
        document.querySelector(".weather-temp").innerHTML = `${temp}&deg;C`;
        document.querySelector(".weather-condition").textContent = condition;
        document.querySelector(".weather-high").textContent = `${high}°C`;
        document.querySelector(".weather-low").textContent = `${low}°C`;
        document.querySelector(".weather-humidity").textContent = `${humidity}%`;
        document.querySelector(".weather-sunrise").textContent = sunrise;
        document.querySelector(".weather-sunset").textContent = sunset;

    } catch (error) {
        // console.error("Error fetching weather:", error);

        const currentWeather = document.querySelector(".current-weather");
        if (currentWeather)
        {
            currentWeather.innerHTML = "<p>Weather data unvavailable</p>"
        } else
        {
            console.log("Weather element not found in the DOM");
        }
        
    }

    try {
        // Fetch weather forecast
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) throw new Error("Failed to fetch forecast data");
        const forecastData = await forecastResponse.json();

        // Filter forecast for the next 3 days
        let forecastDays = {};
        forecastData.list.forEach(item => {
            let date = new Date(item.dt * 1000).toLocaleDateString("en-US", { weekday: "long" });
            if (!forecastDays[date]) {
                forecastDays[date] = Math.round(item.main.temp); // Save the temperature for the day
            }
        });

        // Get the first 3 days from the forecast
        let forecastArray = Object.entries(forecastDays).slice(0, 7);

        // Update HTML for the forecast
        forecastArray.forEach((day, index) => {
            document.querySelector(`.forecast-day-${index + 1}`).textContent = day[0] + ":"; // Day name
            document.querySelector(`.forecast-temp-${index + 1}`).innerHTML = `${day[1]}°C`; // Temperature
        });
        
    } catch (error) {
        const weatherForecast = document.querySelector(".weather-forecast");
        if (weatherForecast)
        {
            weatherForecast.innerHTML = "<p>Weather data unvavailable</p>"
        } else
        {
            console.log("Weather Forecast data unavailable");
        }

    }

});






