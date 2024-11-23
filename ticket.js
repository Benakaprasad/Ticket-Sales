// Priority queue for VIP Pass
let vipQueue = [];
let individualQueue = [];
const VIP_LIMIT = 50;  // Set the limit for VIP passes

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const passType = document.getElementById('pass-type').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (passType === 'vip') {
        if (vipQueue.length < VIP_LIMIT) {
            vipQueue.push({ name, email });
            alert(`${name} has been added to the VIP queue.`);
        } else {
            alert("Sorry, the VIP passes have been sold out!");
        }
    } else {
        individualQueue.push({ name, email });
        alert(`${name} has been added to the Individual queue.`);
    }

    document.getElementById('reservation-form').reset();
});

// Admin Panel functions
document.getElementById('show-queue').addEventListener('click', function() {
    const queueList = document.getElementById('queue-list');
    queueList.innerHTML = '';
    
    // Show VIP Queue first
    vipQueue.forEach(person => {
        const li = document.createElement('li');
        li.textContent = `VIP: ${person.name} (${person.email})`;
        queueList.appendChild(li);
    });

    // Show Individual Queue
    individualQueue.forEach(person => {
        const li = document.createElement('li');
        li.textContent = `Individual: ${person.name} (${person.email})`;
        queueList.appendChild(li);
    });
});

// Sell Ticket functionality
document.getElementById('sell-ticket').addEventListener('click', function() {
    if (vipQueue.length > 0) {
        const soldPerson = vipQueue.shift(); // Priority to VIP
        alert(`Ticket sold to VIP: ${soldPerson.name}`);
    } else if (individualQueue.length > 0) {
        const soldPerson = individualQueue.shift(); // Then sell to individual
        alert(`Ticket sold to: ${soldPerson.name}`);
    } else {
        alert("No tickets available to sell.");
    }
});

// Reset Queue functionality
document.getElementById('reset-queue').addEventListener('click', function() {
    vipQueue = [];
    individualQueue = [];
    document.getElementById('queue-list').innerHTML = '';
    alert("Queue has been reset.");
});
