# Counter App which updates the counter on button click from the input text field

<img src="https://github.com/gitit24x7/Mini-JS-projects/blob/main/counter%20app%20with%20a%20twist/Counter-app.png">

# Learnings
- How to add event listeners 
- Tried keeping the counter value and number input value outside the block and as gloabl values and because of that the button click only worked once. 
- Tried making the app work without parseInt, and so the inpot value as string kept getting concatenated into the counter

# Algorithm 

## Element Selection

Identify and select all necessary HTML elements using query selector
This includes buttons for increasing, decreasing, and resetting
Also select the counter display and input field

Note: Ensure HTML class names exactly match the selectors in JavaScript
Initialize Counter Variable

Create a variable to track the current counter value
Start the value at zero
Use a variable type that allows modification

## Logical Thinking:

The variable represents the current state of the counter
Must be mutable to allow updates with each button click


### Increase Button Logic
a) Input Parsing

When the increase button is clicked, first parse the input value
Convert the input to a number
Handle scenarios where input might be empty
Provide a default value (typically 1) if no input is given

b) Value Accumulation

Add the parsed input value to the existing counter value
This means each click increases the total by the input amount
The key is to add to the existing value, not replace it

- Repeat the steps for the decrease value button 

c) Display Update

Update the counter display with the new accumulated value
Ensure the displayed value reflects the current counter state

# keep in mind

- If the value is not updating, check the input parsing mechanism
- For unexpected results, verify the accumulation logic
- For display issues, validate the DOM element selection
- If the reset functionality fails, review the reset logic
- Do not replace the entire counter value
- Always convert input to a number
- Handle empty or invalid inputs gracefully
  
# inspiration 

This project was the first project of the frontend mini challenges by Sadanand Pai 
 - https://sadanandpai.github.io/frontend-mini-challenges/#/javascript 

App link
- https://sadanandpai.github.io/frontend-mini-challenges/javascript/src/challenges/counter/ 

