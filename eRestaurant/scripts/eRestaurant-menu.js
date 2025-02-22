
const currYear = (new Date()).getFullYear();
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString();

// document.getElementById("current-date").textContent += formattedDate;
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent += lastModified;
document.getElementById("currentYear").textContent = currYear;


// Toggle hamburger menu
const hamburgerMenu = document.getElementById('hamburgerMenu');
const hamburgerOptions = document.getElementById('hamburgerOptions');
const menuContainer = document.getElementById('menu-container');
const navMenu = document.getElementById('nav-menu');



hamburgerMenu.addEventListener('click', () => {
    if (hamburgerOptions.style.display === 'block') {
        hamburgerOptions.style.display = 'none';
        menuContainer.style.display = 'block';
        navMenu.style.display = 'block';
    } else {
        hamburgerOptions.style.display = 'block';  // Show 
        menuContainer.style.display = 'none';
        navMenu.style.display = 'none';
    }
});

// document.getElementById("customer-menu").addEventListener("click", function() {
//     window.open("menu.html", "_blank");
// });



// menu customer
document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const categoriesContainer = document.getElementById("categories");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.error("Error fetching data:", error));

    function displayCategories(categories) {
        categoriesContainer.innerHTML = ""; // Clear previous content

        categories.forEach(category => {
            const categoryElement = document.createElement("div");
            categoryElement.classList.add("category-card");

            categoryElement.innerHTML = `
                <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
                <h3>${category.strCategory}</h3>
                <p>${category.strCategoryDescription.substring(0, 100)}...</p>
            `;

            categoryElement.onclick = function() {
                // You can handle the event here, for example, showing more details about the category
                // alert(`You clicked on ${category.strCategory}`);
                const categoryName = document.getElementById('category-name');
                categoryName.innerText = category.strCategory;

                categoryName.scrollIntoView({
                    behavior: 'smooth', // Smooth scrolling
                    block: 'start' // Align the element to the top of the viewport
                });

                fcReadMeal(category.strCategory);
            };


            categoriesContainer.appendChild(categoryElement);
        });
    }
});

function getRandomPrice(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2); // Generates a random value and formats it to 2 decimal places
}


function fcReadMeal(param = "Beef"){
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + param;
    const mealContainer = document.getElementById("meal-container");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayMeals(data.meals))
        .catch(error => console.error("Error fetching meals:", error));

    function displayMeals(meals) {
        mealContainer.innerHTML = ""; // Clear previous content

        meals.forEach(meal => {
            const mealElement = document.createElement("div");
            mealElement.classList.add("meal-card");

            mealElement.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <p>${meal.strMeal} (ID: ${meal.idMeal})</p>
                <p>Price: $${getRandomPrice(17, 55)}</p> 
                <br>
                <button type="button" onclick="fcOrder();" >Add to Order</button>
            `;

            mealContainer.appendChild(mealElement);
        });
    }
}

