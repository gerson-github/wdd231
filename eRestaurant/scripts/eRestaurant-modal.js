const modalActiveTable = document.getElementById('modal-active-table');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalActions = document.getElementById('modal-actions');
const modalOrder = document.getElementById('modal-order');
const closeButton = document.querySelector('.close');

function fcEdit(){
    modalTitle.innerText = "This is a Demo application.";
    modalMessage.innerText = "Edit form is not available. (to close click out side of the form)"
    modalActions.style.display = "none";
    modalActiveTable.style.display = 'block';
}  

function fcDel() {
    modalTitle.innerText = "Are you sure?";
    modalMessage.innerText = "Do you want to proceed with this action?"
    modalActions.style.display = "flex";
    modalActiveTable.style.display = 'block';
}

function fcOrder() {
    modalOrder.style.display = 'block';
}



    // Close modalWaitList
    closeButton.addEventListener('click', () => {
        modalWaitList.style.display = 'none';
        modalActiveTable.style.display = 'none';
    });

    // Close modalWaitList when clicking outside content
    window.addEventListener('click', (event) => {
        if (event.target === modalWaitList || event.target === modalActiveTable) {
            modalWaitList.style.display = 'none';
            modalActiveTable.style.display = 'none';
        }
    });


document.addEventListener('DOMContentLoaded', () => {
    // Add event 

 
    
    const addButtonActiveTable = document.getElementById('add-active-table');
    const editBtn = document.getElementById('edit-btn');
    const delBtn = document.getElementById('del-btn');

    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalActions = document.getElementById('modal-actions');
    
    const modalActiveTable = document.getElementById('modal-active-table');
    const modalWaitList = document.getElementById('modal-wait-list');
    const addButtonWaitList = document.getElementById('add-wait-list');
    // const closeButton = document.querySelector('.close');

    // Open modalWaitList - insert
    addButtonWaitList.addEventListener('click', () => {
        modalWaitList.style.display = 'block';
    });

    // Open modalActiveTable - insert
    addButtonActiveTable.addEventListener('click', () => {

        modalTitle.innerText = "This is a Demo application.";
        modalMessage.innerText = "The modal form for Active Table and Orders is not available. (to close click out side of the form)"
        modalActions.style.display = "none";

        modalActiveTable.style.display = 'block';
    });

    

    // Close modalWaitList
    closeButton.addEventListener('click', () => {
        modalWaitList.style.display = 'none';
        modalActiveTable.style.display = 'none';
    });

    // Close modalWaitList when clicking outside content
    window.addEventListener('click', (event) => {
        if (event.target === modalWaitList || event.target === modalActiveTable) {
            modalWaitList.style.display = 'none';
            modalActiveTable.style.display = 'none';
        }
    });

    // Submit form
    const form = document.getElementById('waitlist-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form data
        const formData = new FormData(form);
        const customerName = formData.get('customer-name');
        const phoneNumber = formData.get('phone-number');
        const partySize = formData.get('party-size');
        const checkIn = formData.get('check-in');
        const estimateWait = formData.get('estimate-wait');
        const tablePreference = formData.get('table-preference');

        // Process data (e.g., send to server or display on the screen)
        console.log({
            customerName,
            phoneNumber,
            partySize,
            checkIn,
            estimateWait,
            tablePreference,
        });

        //insere registro
        const tableBody = document.querySelector('#wait-list-table tbody');
        const row = document.createElement('tr');  // Create a new table row
        // Create table cells for each customer property and append them to the row
        const columns = [
            { label: 'Customer Name', value: customerName },
            { label: 'Phone Number', value: phoneNumber },
            { label: 'Party Size', value: partySize },
            { label: 'Check-In', value: new Date(checkIn).toLocaleString() },
            { label: 'Estimated Wait Time', value: estimateWait },
            { label: 'Table Preference', value: tablePreference },
            { label: 'Special Notes', value: 'n/a' }
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
                    <button type="button" onclick="fcEdit();"  >
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


        const successMessage = document.getElementById('success-message');
        successMessage.classList.add('show');

        // Clear form and close modalWaitList
        form.reset();
        modalWaitList.style.display = 'none';


        // Hide the success message after 3 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 3000);
    });

});





