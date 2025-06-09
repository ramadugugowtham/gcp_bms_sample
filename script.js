document.addEventListener("DOMContentLoaded", () => {
  const events = [
    {
      title: "Coldplay Concert",
      date: "2025-01-20",
      location: "Mumbai, India",
    },
    {
      title: "Comedy Night",
      date: "2025-01-25",
      location: "Delhi, India",
    },
    {
      title: "Art Exhibition",
      date: "2025-02-10",
      location: "Bangalore, India",
    },
  ];

  const eventList = document.querySelector(".event-list");

  events.forEach(event => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");
    eventCard.innerHTML = `
      <h3>${event.title}</h3>
      <p>Date: ${event.date}</p>
      <p>Location: ${event.location}</p>
      <button onclick="bookTicket('${event.title}')">Book Now</button>
    `;
    eventList.appendChild(eventCard);
  });
});

const { Client } = require('pg');

// Configure PostgreSQL client
const client = new Client({
  user: 'postgres',
  host: '34.136.96.95',
  database: 'mydatabase',
  password: '.Ah+*+mSPq#|Xv<2',
  port: 5432,
});

// Connect to the database
client.connect();

// Function to log events
function logEvent(eventType, eventData) {
  const query = 'INSERT INTO events(event_type, event_data) VALUES($1, $2)';
  const values = [eventType, JSON.stringify(eventData)];

  client.query(query, values, (err, res) => {
    if (err) {
      console.error('Error inserting event:', err.stack);
    } else {
      console.log('Event logged:', res.rows);
    }
  });
}

// Example usage
logEvent('UserLogin', { userId: 123, status: 'success' });

// Close the database connection
client.end();


