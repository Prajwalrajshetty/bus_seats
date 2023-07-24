// JavaScript code to handle seat selection and booking confirmation

const bookedSeats = [2, 5, 10]; // Simulated booked seats

let selectedSeats = []; // Array to store selected seat numbers

document.addEventListener('DOMContentLoaded', function() {
  updateBusSeats();
});

document.querySelector('.bus-seats').addEventListener('click', function(event) {
  if (event.target.classList.contains('seat')) {
    const seatNumber = parseInt(event.target.textContent);
    selectSeat(seatNumber);
  }
});

function updateBusSeats() {
  const busSeatsContainer = document.querySelector('.bus-seats');
  busSeatsContainer.innerHTML = "";

  for (let i = 1; i <= 20; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    if (bookedSeats.includes(i)) {
      seat.classList.add('booked');
    } else if (selectedSeats.includes(i)) {
      seat.classList.add('selected');
    }
    seat.textContent = i;
    busSeatsContainer.appendChild(seat);
  }
}

function selectSeat(seatNumber) {
  const index = selectedSeats.indexOf(seatNumber);
  if (index === -1) {
    selectedSeats.push(seatNumber);
  } else {
    selectedSeats.splice(index, 1);
  }
  updateBusSeats();
  updateBookingStatus();
}

function updateBookingStatus() {
  const bookingStatus = document.getElementById('bookingStatus');
  const totalAmount = selectedSeats.length * 50; // Assuming each seat costs $50
  bookingStatus.textContent = `Selected Seats: ${selectedSeats.join(', ')}. Total Amount: $${totalAmount}`;
}
