const  increaseButton = document.querySelector('.add')
const  decreaseButton = document.querySelector('.reduce')
const  resetButton = document.querySelector('.reset')
const  counter = document.querySelector('.counter')
const  numberInput = document.querySelector('.input')

var counterValue = 0; 

//increase value logic
increaseButton.addEventListener('click',() => {
    var numberInputvalue = parseInt(numberInput.value);
    counter.innerText = counterValue + numberInputvalue;
    console.log('Plus button has been clicked');
})

//decrease value logic
decreaseButton.addEventListener('click',() => {
    var numberInputvalue = parseInt(numberInput.value);
    counter.innerText = counterValue--; 
    console.log('Minus button has been clicked');
})

//reset logic 

resetButton.addEventListener('click',() => {
   counterValue = 0;
   counter.innerText = counterValue; 
})
