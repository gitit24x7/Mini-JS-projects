const  increaseButton = document.querySelector('.add')
const  decreaseButton = document.querySelector('.reduce')
const  resetButton = document.querySelector('.reset')
const  counter = document.querySelector('.counter')
const  numberInput = document.querySelector('.input')



//increase value logic
increaseButton.addEventListener('click',() => {
    let counterValue = parseInt(counter.innerText); 
    let numberInputvalue = parseInt(numberInput.value);
    counter.innerText = counterValue + numberInputvalue;
})

//decrease value logic
decreaseButton.addEventListener('click',() => {
    let counterValue = parseInt(counter.innerText); 
    let numberInputvalue = parseInt(numberInput.value); 
    counter.innerText = counterValue - numberInputvalue;
})

//reset logic 

resetButton.addEventListener('click',() => {
   let counterValue = 0;
   counter.innerText = counterValue; 
})
