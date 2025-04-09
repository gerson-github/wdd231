const currYear = new Date().getFullYear(),
    lastModified = document.lastModified;
function getRandomMembers(t, e) {
    return t.sort(() => 0.5 - Math.random()).slice(0, e);
}
(document.getElementById("lastModified").textContent += lastModified), (document.getElementById("currentYear").textContent = currYear);
const toggleViewButton = document.getElementById("toggle-view"),
    isIndexPage = location.pathname.endsWith("index.html") || "/" === location.pathname;
document.addEventListener("DOMContentLoaded", () => {
    const t = document.querySelectorAll("nav ul li");
    t.forEach((e) => {
        e.addEventListener("click", function () {
            t.forEach((t) => t.classList.remove("active")), this.classList.add("active");
        });
    });
    const e = document.querySelector("header button"),
        n = document.querySelector("nav");
    e.addEventListener("click", () => {
        n.classList.toggle("open");
    });
    let a = document.querySelector(".business-directory"),
        o = document.getElementById("list-view");
    async function d() {
        try {
            const t = await fetch("data/members.json");
            let e = (await t.json()).members;
            isIndexPage && (e = getRandomMembers(e, 3)),
                o && (o.innerHTML = ""),
                a && (a.innerHTML = ""),
                e.forEach((t) => {
                    const e = document.createElement("div");
                    e.classList.add("business-card"),
                        (e.innerHTML = `\n                    <h3>${t.name}</h3>\n                    <p style="border-bottom: 1px solid gray; font-size: 12px; margin: 0; padding: 0;">\n                        ${
                            t.category
                        }\n                    </p>\n                    <div class="business-card-detail">\n                        <img src="images/${t.image}" alt="${
                            t.name
                        }" width="80" loading="lazy">\n                        <div>\n                            <dl class="card-content">\n                                <dt>EMAIL:</dt>\n                                <dd><a href="mailto:${
                            t.email || "#"
                        }">${t.email || "N/A"}</a></dd>\n                                <dt>PHONE:</dt>\n                                <dd>${
                            t.phone
                        }</dd>\n                                <dt>ADDRESS:</dt>\n                                <dd>${t.address}</dd>\n                                <dt>URL:</dt>\n                                <dd><a href="${
                            t.website
                        }" target="_blank">${
                            t.website
                        }</a></dd>\n                                <dt></dt>\n                                <dd><button class="button">Learn More</button></dd>\n                            </dl>\n                        </div>\n                    </div>\n                `),
                        a.appendChild(e);
                });
        } catch (t) {}
    }
    toggleViewButton &&
        toggleViewButton.addEventListener("click", () => {
            a.classList.toggle("list-view"),
                a.classList.contains("list-view")
                    ? ((toggleViewButton.textContent = "Switch to Card View"),
                      (async function () {
                          try {
                              const t = await fetch("data/members.json"),
                                  e = await t.json();
                              o && (o.innerHTML = ""), a && (a.innerHTML = "");
                              const n = document.createElement("table");
                              n.innerHTML =
                                  "\n                <thead>\n                    <tr>\n                        <th>Company Name</th>\n                        <th>Type</th>\n                        <th>Email</th>\n                        <th>Phone</th>\n                        <th>Address</th>\n                        <th>Website</th>\n                    </tr>\n                </thead>\n                <tbody></tbody>\n            ";
                              const d = n.querySelector("tbody");
                              e.members.forEach((t) => {
                                  const e = document.createElement("tr");
                                  (e.innerHTML = `\n                    <td data-label="Company Name">${t.name}</td>\n                    <td data-label="Type">${
                                      t.category
                                  }</td>\n                    <td data-label="Email"><a href="mailto:${t.email || "#"}">${t.email || "N/A"}</a></td>\n                    <td data-label="Phone">${
                                      t.phone
                                  }</td>\n                    <td data-label="Address">${t.address}</td>\n                    <td data-label="Website"><a href="${t.website}" target="_blank">Visit</a></td>\n                `),
                                      d.appendChild(e);
                              }),
                                  o.appendChild(n);
                          } catch (t) {}
                      })())
                    : ((toggleViewButton.textContent = "Switch to List View"), d());
        }),
        d();
}),
    document.addEventListener("DOMContentLoaded", async () => {
        const t = "9085b3b21530cca83ec19fa4f9cfd2ed",
            e = "Victoria",
            n = `https://api.openweathermap.org/data/2.5/weather?q=${e},CA&units=metric&appid=${t}`,
            a = `https://api.openweathermap.org/data/2.5/forecast?q=${e},CA&units=metric&appid=${t}`;
        try {
            const t = await fetch(n);
            if (!t.ok) throw new Error("Failed to fetch weather data");
            const e = await t.json(),
                a = Math.round(e.main.temp),
                o = Math.round(e.main.temp_max),
                d = Math.round(e.main.temp_min),
                i = e.main.humidity,
                r = e.weather[0].description,
                c = (e.weather[0].icon, new Date(1e3 * e.sys.sunrise).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })),
                s = new Date(1e3 * e.sys.sunset).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
            (document.querySelector(".weather-temp").innerHTML = `${a}&deg;C`),
                (document.querySelector(".weather-condition").textContent = r),
                (document.querySelector(".weather-high").textContent = `${o}°C`),
                (document.querySelector(".weather-low").textContent = `${d}°C`),
                (document.querySelector(".weather-humidity").textContent = `${i}%`),
                (document.querySelector(".weather-sunrise").textContent = c),
                (document.querySelector(".weather-sunset").textContent = s);
        } catch (t) {
            const e = document.querySelector(".current-weather");
            e && (e.innerHTML = "<p>Weather data unvavailable</p>");
        }
        try {
            const t = await fetch(a);
            if (!t.ok) throw new Error("Failed to fetch forecast data");
            const e = await t.json();
            let n = {};
            e.list.forEach((t) => {
                let e = new Date(1e3 * t.dt).toLocaleDateString("en-US", { weekday: "long" });
                n[e] || (n[e] = Math.round(t.main.temp));
            }),
                Object.entries(n)
                    .slice(0, 7)
                    .forEach((t, e) => {
                        (document.querySelector(`.forecast-day-${e + 1}`).textContent = t[0] + ":"), (document.querySelector(`.forecast-temp-${e + 1}`).innerHTML = `${t[1]}°C`);
                    });
        } catch (t) {
            const e = document.querySelector(".weather-forecast");
            e && (e.innerHTML = "<p>Weather data unvavailable</p>");
        }
    });

    const agora = Date.now();
    const mensagemContainer = document.getElementById("visit-message");
    const ultimaVisita = localStorage.getItem("ultimaVisita");
  
    let mensagem = "";
  
    if (!ultimaVisita) {
      mensagem = "Welcome! Let us know if you have any questions.";
    } else {
      const ultimaVez = parseInt(ultimaVisita, 10);
      const milissegundosPorDia = 1000 * 60 * 60 * 24;
      const diasEntre = Math.floor((agora - ultimaVez) / milissegundosPorDia);
  
      if (diasEntre < 1) {
        mensagem = "Back so soon! Awesome!";
      } else if (diasEntre === 1) {
        mensagem = "Você nos visitou há 1 dia.";
      } else {
        mensagem = `You last visited ${diasEntre} days ago.`;
      }
    }
  
    mensagemContainer.textContent = mensagem;
    mensagemContainer.classList.add("show");
  
    // Esconde lentamente após 4 segundos
    setTimeout(() => {
      mensagemContainer.classList.remove("show");
      mensagemContainer.classList.add("hide");
    }, 4000);
  
    // Remove do DOM após 5 segundos
    setTimeout(() => {
      mensagemContainer.remove();
    }, 5000);
  
    localStorage.setItem("ultimaVisita", agora);
