document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
  
    const confirmationMessage = `Thank you, ${name}! Your reservation for ${guests} guests on ${date} at ${time} has been confirmed. An email confirmation will be sent to ${email}.`;
  
    document.getElementById('confirmation').innerText = confirmationMessage;
    document.getElementById('reservationForm').reset();
  
  
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `<div class="popup-content">
                          <span class="close">&times;</span>
                          <p>Thank you for the reservation! Someone will reach out to you shortly.</p>
                       </div>`;
    document.body.appendChild(popup);
  

    popup.querySelector('.close').addEventListener('click', function() {
      popup.remove();
    });
  });
  