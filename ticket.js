// Initialize the queues
let groupQueue = [];
let individualQueue = [];

// Group Reservation
function reserveGroup() {
    const groupName = document.getElementById('groupName').value.trim();
    const groupSize = parseInt(document.getElementById('groupSize').value);

    if (groupName && groupSize > 0) {
        groupQueue.push({ groupName, groupSize });
        updateQueueDisplay();
        document.getElementById('status').textContent = `${groupName} (${groupSize} members) added to the group reservation queue.`;
        
        // Clear the input fields after reservation
        document.getElementById('groupName').value = '';
        document.getElementById('groupSize').value = '';
    } else {
        document.getElementById('status').textContent = "Please enter a valid group name and size.";
    }
}

// Individual Reservation
function reserveIndividual() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (name && email) {
        individualQueue.push({ name, email });
        updateQueueDisplay();
        document.getElementById('status').textContent = `${name} (${email}) reserved a ticket successfully.`;
        
        // Clear the input fields after reservation
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    } else {
        document.getElementById('status').textContent = "Please enter both your name and email.";
    }
}

// Sell Ticket (for simplicity, we just remove the first individual in the queue)
function sellTicket() {
    if (individualQueue.length > 0) {
        const soldTicket = individualQueue.shift();
        updateQueueDisplay();
        document.getElementById('status').textContent = `${soldTicket.name} sold their ticket.`;
    } else {
        document.getElementById('status').textContent = "No tickets to sell.";
    }
}

// Update the Queue Display
function updateQueueDisplay() {
    const queueList = document.getElementById('queueList');
    queueList.innerHTML = ""; // Clear the queue list

    // Display Group Queue
    groupQueue.forEach((group, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. Group: ${group.groupName} (${group.groupSize} members)`;
        queueList.appendChild(li);
    });

    // Display Individual Queue
    individualQueue.forEach((individual, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. Individual: ${individual.name} (${individual.email})`;
        queueList.appendChild(li);
    });
}

// Reset the Queue (Admin only)
function resetQueue() {
    groupQueue = [];
    individualQueue = [];
    updateQueueDisplay();
    document.getElementById('status').textContent = "The queue has been reset.";
}
