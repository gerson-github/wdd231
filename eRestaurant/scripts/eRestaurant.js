
const currYear = (new Date()).getFullYear();
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString();

document.getElementById("current-date").textContent += formattedDate;
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

document.getElementById("customer-menu").addEventListener("click", function() {
    window.open("menu.html", "_blank");
});

// Event listener for icons and content changes
document.addEventListener('DOMContentLoaded', () => {
    const navigationIcons = document.querySelectorAll('.icon-list img');

    navigationIcons.forEach(icon => {
        icon.addEventListener('click', event => {
            const action = icon.dataset.action;
            console.log(`You clicked: ${action}`);

            switch (action) {
                case 'speaker':
                    toggleDisplay(speaker);
                    break;
                case 'search':
                    toggleDisplay(search);
                    break;
                case 'notifications':
                    toggleDisplay(notifications);
                    break;
                case 'settings':
                    // content.innerHTML = '<h1>Settings</h1><p>Manage system preferences.</p>';
                    break;
                case 'user':
                    // content.innerHTML = '<h1>User Profile</h1><p>View and edit your profile information.</p>';
                    break;
                default:
                    alert('Unknown action!');
            }
        });
    });

    // Function to toggle display
    function toggleDisplay(element) {
        element.style.display = (element.style.display === 'none') ? 'block' : 'none';
    }

});


// Function to populate the table with customer data
async function populateTable() {

    const n = await fetch("data/customer.json");
    const data = await n.json();
    const customers = data.customer;

    // Get the table body element where the rows will be inserted
    const tableBody = document.querySelector('#wait-list-table tbody');

    // Clear the table before adding new rows
    tableBody.innerHTML = '';

    // Loop through the customer data and create table rows
    customers.forEach(customer => {
        const row = document.createElement('tr');  // Create a new table row

        // Create table cells for each customer property and append them to the row
        const columns = [
            { label: 'Customer Name', value: customer.customer_name },
            { label: 'Phone Number', value: customer.phone_number },
            { label: 'Party Size', value: customer.party_size },
            { label: 'Check-In', value: new Date(customer.check_in).toLocaleString() },
            { label: 'Estimated Wait Time', value: customer.estimated_wait_time },
            { label: 'Table Preference', value: customer.table_preference },
            { label: 'Special Notes', value: customer.special_notes }
        ];

        columns.forEach(col => {
            const cell = document.createElement('td');  // Create a new table cell
            cell.textContent = col.value;  // Set the cell's text content to the customer data value
            cell.setAttribute('data-label', col.label);
            row.appendChild(cell);  // Append the cell to the row
        });

        // Create and append action column
        const actionCell = document.createElement('td');
        actionCell.setAttribute('data-label', 'Action');
        actionCell.innerHTML = `
           <td>
                <div class="action">
                    <button type="button" onclick="fcEdit();" >
                        <img id="img-pencil" class="img-pencil" src="images/pencil-img_bg_removed.png"  alt="Edit">
                    </button>
                    <button type="button" onclick="fcDel();">
                        <img id="img-trash" class="img-trash" src="images/trash-img_bg_removed.png" alt="Delete">
                    </button>
                </div>
            </td>
            
        `;
        row.appendChild(actionCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Call the function to populate the table when the page loads
document.addEventListener('DOMContentLoaded', populateTable);

function deleteRow()
{
    const row = event.target.closest('tr');
    row.remove();
}




