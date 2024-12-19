## Type Racer Game
When user comes on to the page, the game timer starts, user can enter the words and till the time the input value is correct it is not shown in black. 
User can choose difficulty which persists when the page is refreshed as well. The target is to type 100 words in 60 seconds. 

## Thought process and Algorithm:

Initialize the game state by setting up variables and selecting DOM elements.
Focus the input field so the player can start typing right away.
Start the timer countdown, displaying it in the DOM.
Every second, update the timer and stop the game if time runs out.
Once the timer reaches 0, the game ends and displays the final score.
Each time the player types, compare the input with the random word.
If the player types correctly, generate a new word, update the score, and clear the input field.
If the player types incorrectly, highlight the input as incorrect.
Allow the player to restart the game by showing the "Play Again" button.

Here’s the full **what** and **why** breakdown of each section in your Speed Typing Game, **without any changes** to the original content:

---

### **1. Initialize Game State**

#### **What:**
- Select important DOM elements such as the word container (`.word`), score (`.score`), time counter (`.time`), input field (`.value`), and game over section (`.gameover`).
- Initialize variables like `randomWord`, `score`, `timer`, and `gameOverFlag`.

#### **Why:**
- These initializations are crucial to set up the game environment. The DOM elements need to be accessed for updating the game state (showing words, scores, time), and variables maintain the state of the game (current word, score, and timer).

---

### **2. Focus on Input Field**

#### **What:**
- Set the focus on the input field (`inputValue.focus()`).

#### **Why:**
- This ensures that as soon as the game loads, the player can immediately start typing without needing to click the input field manually, providing a better user experience.

---

### **3. Start Timer Countdown**

#### **What:**
- Use `setInterval(updateTime, 1000)` to start a countdown timer that decreases every second.

#### **Why:**
- The countdown timer is a core part of the game. It gives the player a time limit to type the words, creating a sense of urgency and excitement. This is also how we manage the game's duration.

---

### **4. Update Time Every Second**

#### **What:**
- In the `updateTime()` function, reduce the `timer` by 1 every second and update the `.time` DOM element.
- If the timer hits 0, call `gameOver()` to end the game.

#### **Why:**
- The countdown shows the player how much time remains. When the timer reaches zero, the game must end, and the player's score is displayed. This function makes the timer visible and stops it when the game is over.

---

### **5. Handle Game Over**

#### **What:**
- When the timer hits zero, stop the interval (`clearInterval(timeInterval)`), update the `.gameover` section to show the final score, and make the "Play Again" button visible.

#### **Why:**
- This marks the end of the game and gives the player feedback on their performance. The option to restart the game is provided, so the player can easily play again without reloading the page.

---

### **6. Generate Random Word**

#### **What:**
- Use the function `getRandomWord()` to select a random word from the predefined list of words (`words[]`).

#### **Why:**
- The game needs a new word for the player to type after each correct attempt. Random word generation ensures variety, keeping the game interesting and challenging.

---

### **7. Attach Word to DOM**

#### **What:**
- Call `attachwordToDom()` to set the current `randomWord` in the `.word` DOM element.

#### **Why:**
- This function displays the word that the player needs to type. It's called every time a new word is generated or after the player types a word correctly. This keeps the game dynamic.

---

### **8. Listen for Input Changes**

#### **What:**
- Add an event listener on the input field to detect changes (`inputValue.addEventListener('input', e => {...})`).
- If the entered text matches `randomWord`, call `attachwordToDom()`, update the score, and clear the input field. If incorrect, mark the input field as "incorrect" (using CSS class `incorrect`).

#### **Why:**
- The core functionality of the game is to check if the player's input matches the target word. If they typed it correctly, a new word is shown, and the score is updated. If incorrect, feedback is provided by visually marking the input field.

---

### **9. Update Score**

#### **What:**
- The function `updateScore()` increases the `score` by 1 and updates the `.score` DOM element.

#### **Why:**
- The player's score increases with every correct word typed. This keeps track of their performance and motivates them to type as many words as possible before time runs out.

---

### **10. Display Incorrect Input Feedback**

#### **What:**
- When the player types an incorrect word, the input field is visually marked by adding the `incorrect` class (`e.target.classList.add('incorrect')`).

#### **Why:**
- This provides immediate visual feedback to the player, helping them identify that they've made a mistake. It also enhances the user experience by indicating which words need to be corrected.
---

## Functionalities I added: 
- Input is disabled after timer runs out
- Difficulty states are stored in local storage
- reload option is provided after the game ends
- incorrect input value is shown in red till the time it matches

## Learnings: 
- return words[Math.floor(Math.random()* words.length)]; the words.length helps to generate a round number and not a decimal value, and hence the multiplication
- The .classList.add() method is used to add a CSS class to an HTML element. 
- 

