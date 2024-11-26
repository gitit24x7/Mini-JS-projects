const container = document.querySelector('.container');
//grabbibg seats that ar enot occupied
const seats = document.querySelectorAll('.screenrows .seat:not(.Not-Available)');
const count = document.getElementById('count');
//picking up the selected seats coun in the text class at the bottom
const amount = document.getElementById('amount');
//taking up the movies to update the values for the span element at the bottom of the UI
const movieSelect = document.getElementById('movie');
//adding + makes the return value a number, without the + it will be a string 
let ticketPrice = +movieSelect.value; // we are using let since we will be updating the tikcet price total after every selection dynamically

//save selected movie index and the prices
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);
} 

function updateValueandAmount() {
const selectedSeats = document.querySelectorAll('.screenrows .seat.Selected');
const selectedseatsCount = selectedSeats.length;
//Next we will save the states in local storage so when we reresh the page, the selections dont change. 
/* For that we need to do that following:
   1) Copy the selected seats into an array (with ...)
   2) Map the array
   3) Return a new array of indexes, we can use the spread operator
*/
//saving to local storage
const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

count.innerText = selectedseatsCount;
amount.innerText = selectedseatsCount*ticketPrice;

}

// New function to restore seats and movie selection when page loads
function populateUI() {
    // Check if we have any saved movie selection
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    
    // If we have a saved movie, restore it
    if (selectedMovieIndex !== null) {
        // Set the dropdown to the previously selected movie
        movieSelect.selectedIndex = selectedMovieIndex;
        // Update the ticket price based on saved price
        ticketPrice = +localStorage.getItem('selectedMoviePrice');
    }

    // Retrieve saved seats from local storage
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    
    // If we have saved seats, restore their selected state
    if (selectedSeats !== null && selectedSeats.length > 0) {
        // Loop through all seats and add 'Selected' class to saved seats
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('Selected');
            }
        });
    }

    // Update the count and amount after restoring
    updateValueandAmount();
}

//firing an event on the change of movie from the list so that the price and count changes accordinly 
movieSelect.addEventListener('change',e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value); //saving the movie name 
    updateValueandAmount();
})
//next we want to clck on a seat and make it into a selected class
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat')&&!e.target.classList.contains('Not-Available')){
        e.target.classList.toggle('Selected'); 
        updateValueandAmount(); 
    }
});

// Call the new function when the page loads to restore previous selections
populateUI();
