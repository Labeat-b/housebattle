document.addEventListener("DOMContentLoaded", function() {
    const eventsContainer = document.getElementById("eventsContainer");
  
    const eventsData = [
      {
        name: "Live Jazz Night",
        date: "2024-04-15",
        time: "7:00 PM - 10:00 PM",
        description: "Join us for an evening of live jazz music performed by talented musicians. Relax in the elegant ambiance of New York Cafe Budapest and enjoy our specialty drinks and desserts."
      },
      {
        name: "Art Exhibition: Albanian Masters",
        date: "2024-04-22",
        endDate: "2024-05-15",
        time: "10:00 AM - 6:00 PM (Monday-Saturday)",
        description: "Discover the works of renowned Albanian artists at our exclusive art exhibition. Explore a diverse collection of paintings, sculptures, and multimedia installations celebrating Hungary's rich cultural heritage."
      }
    ];
  
    function displayEvents(events) {
      eventsContainer.innerHTML = "";
      events.forEach(event => {
        const eventElement = document.createElement("div");
        eventElement.classList.add("event");
        eventElement.innerHTML = `
          <h2>${event.name}</h2>
          <p>Date: ${event.date}${event.endDate ? ` - ${event.endDate}` : ""}</p>
          <p>Time: ${event.time}</p>
          <p>Description: ${event.description}</p>
        `;
        eventsContainer.appendChild(eventElement);
      });
    }
  
    displayEvents(eventsData);
  });
  