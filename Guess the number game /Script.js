const submit =document.querySelector('.submit')
const inputValue = document.querySelector('.inputValue')
const newGame = document.querySelector('.Newgame')
const form = document.querySelector('.form')
const result = document.querySelector('.results')
const guesses = document.querySelector('.guesses')




//An array to store the input values and later show to the user with innerText (line 40 of the code)
let guessesArray = []

let randomnumber = Math.round(Math.random()*100)

//Start Game button logic after one sumission, to refresh all the fields and values and disable itself 
function newgamebtn(){
    newGame.addEventListener('click', ()=> {
        console.log('new game button is clicked')
        result.innerText = ' '
        guessesArray = [];
        guesses.innerText= ''
        inputValue.disabled = false;
        submit.disabled = false;
        randomnumber = Math.round(Math.random()*100)
        newGame.disabled = true;
      })
}

//With forms the the submit event always refreshes the page

form.addEventListener('submit', (e) => {

//prevent default behaviour of form refreshing 
e.preventDefault()

//saving user input
const input = parseInt(inputValue.value)
console.log(input);


//Checking and comparing the input values with the random numer generated
if(input === randomnumber){
  result.innerText = 'Congrats! Correct Guess! How did you guess the correct number, did you cheat?' 

  submit.disabled = true;
  newGame.disabled =false;
}

else if(input>randomnumber){
    result.innerText = 'Too High!'
}

else if(input<randomnumber){
    result.innerText = 'Too Low!'
}

//Before refreshing the form, we want to push the values into the array
guessesArray.push(input)
guesses.innerText = 'Your guesses Are :' + guessesArray.join(', ')


//After submitting the input value the text field should be empty, for that we will apply reset method on form
form.reset();

newgamebtn();

})


