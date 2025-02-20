
document.addEventListener('DOMContentLoaded', () => {
    // Add event 
    
    const modalActiveTable = document.getElementById('modal-active-table');
    const addButtonActiveTable = document.getElementById('add-active-table');

    const modalWaitList = document.getElementById('modal-wait-list');
    const addButtonWaitList = document.getElementById('add-wait-list');
    const closeButton = document.querySelector('.close');

    // Open modalWaitList
    addButtonWaitList.addEventListener('click', () => {
        modalWaitList.style.display = 'block';
    });

    // Open modalActiveTable
    addButtonActiveTable.addEventListener('click', () => {
        modalActiveTable.style.display = 'block';
    });


    // Close modalWaitList
    closeButton.addEventListener('click', () => {
        modalWaitList.style.display = 'none';
        modalActiveTable.style.display = 'none';
    });

    // Close modalWaitList when clicking outside content
    window.addEventListener('click', (event) => {
        if (event.target === modalWaitList || event.target === modalActiveTable ) {
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

        // Clear form and close modalWaitList
        form.reset();
        modalWaitList.style.display = 'none';
    });

    


});





