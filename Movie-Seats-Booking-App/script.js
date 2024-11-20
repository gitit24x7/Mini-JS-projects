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

function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePRice',moviePrice);
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

//firing an even on the change of movie from the list so that the price and count changes accordinly 
movieSelect.addEventListener('change',e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value)
    updateValueandAmount();
})
//next we want to clck on a seat and make it into a selected class
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat')&&!e.target.classList.contains('Not-Available')){
        e.target.classList.toggle('Selected'); 

        updateValueandAmount(); 
    }
});

