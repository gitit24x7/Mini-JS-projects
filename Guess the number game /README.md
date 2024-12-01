# Guess The Number Game

## live link
 https://guessnumero.netlify.app/

## Algorithm:
- Save the random number using math.random and use math.round to make it a whole number rather than a fractional value
- Save the user input value and convert it into a number using parseInt
- Check if the user input value is greater than the random number, equal or smaller and show statemets like too high, too low and congrats 
  accordingly
- Empty the input field after every input and display statements
- add the input values in an array and then concatenate the array with a statement using the join method for , separationa and space
- reset the form with form.reset so that the field value inputted is removed automatically
- Write the start game button logic. start button should update all the values and update the randomnumber as well

## Learnings: 
 - We can disable the buttons in many ways- First by making it disabled in HTML and second via CSS with cursor: not-allowed 
 - Use preventdefault so that the submit event doesnt refresh the page quickly
 - Clearing the form inputs in the text field, we can either input an empty string or use the reset() method. 
 - Form accepts the input if we press enter (this is a default feature of form), this is why we chose to use a form rather than a button tag. 
 - any button.disable or .enable greys out the button in Javascript
 - do not redeclare the random number with let or const inside the local scope of a function or any local scope, that does not use the globally defined randomnunmber value and hence it does not refresh
- there is no button.enabled attribute, only the disabled attribute.


# inspiration 

This project was the second project of the frontend mini challenges by Sadanand Pai 
 - https://sadanandpai.github.io/frontend-mini-challenges/#/javascript 
