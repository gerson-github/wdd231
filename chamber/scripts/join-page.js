const currYear=(new Date).getFullYear(),lastModified=document.lastModified;function openModal(e){document.getElementById(e).showModal()}function closeModal(e){document.getElementById(e).close()}document.getElementById("lastModified").textContent+=lastModified,document.getElementById("currentYear").textContent=currYear,window.addEventListener("load",(()=>{document.getElementById("timestamp").value=(new Date).toISOString()})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll("nav ul li");e.forEach((t=>{t.addEventListener("click",(function(){e.forEach((e=>e.classList.remove("active"))),this.classList.add("active")}))}));const t=document.querySelector("header button"),n=document.querySelector("nav");t.addEventListener("click",(()=>{n.classList.toggle("open")}));const o=document.getElementById("form-application");o.addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(o);t.set("timestamp",(new Date).toISOString());const n=new URLSearchParams(t).toString();window.location.href=`thankyou.html?${n}`}))}));