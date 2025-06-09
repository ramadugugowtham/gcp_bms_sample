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
      <button>Book Now</button>
    `;
    const button = eventCard.querySelector("button");
    button.addEventListener("click", () => {
      fetch("http://localhost:3000/log-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          eventType: "Booking",
          eventData: event
        })
      })
      .then(res => res.text())
      .then(data => {
        alert("Event logged!");
        console.log(data);
      })
      .catch(err => {
        console.error("Error logging event:", err);
      });
    });

    eventList.appendChild(eventCard);
  });
});
