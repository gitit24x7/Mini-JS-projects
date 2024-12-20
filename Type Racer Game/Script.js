const word =document.querySelector('.word')
const scores =document.querySelector('.score')
const timercounter = document.querySelector('.time')
const difficulty = document.querySelector('.difficulty')
const settingsbtn = document.querySelector('.fa-solid fa-gear')
const inputValue =  document.querySelector('.value')
const over = document.querySelector('.gameover')
const reloaded = document.querySelector('.reload')


function startGame(){

    const words = [ 
        "lightning", "whisper", "mountain", "adventure", "silence", 
        "dream", "butterfly", "ocean", "revolution", "melody", 
        "spark", "moonlight", "journey", "courage", "harmony", 
        "rhythm", "galaxy", "freedom", "wonder", "passion", 
        "sunrise", "echo", "wisdom", "miracle", "treasure", 
        "horizon", "imagination", "spirit", "thunder", "crystal", 
        "phoenix", "storm", "warrior", "enchantment", "universe", 
        "radiance", "destiny", "mystery", "triumph", "serenity", 
        "cascade", "whispers", "eclipse", "momentum", "wanderer", 
        "twilight", "revelation", "infinity", "essence", "tranquility",
        "extraordinary", "imagination", "enthusiastic", "revolutionary", "magnificent", 
        "serendipitous", "transformation", "breathtaking", "spectacular", "unbelievable", 
        "inconceivable", "unforgettable", "sophisticated", "illuminating", "challenging", 
        "adventurous", "breathless", "supernatural", "mesmerizing", "exploration", 
        "inspirational", "incomparable", "revolutionary", "phenomenal", "overwhelming", 
        "astonishing", "unconditional", "extraordinary", "miraculous", "captivating", 
        "thunderstruck", "unpredictable", "enthusiastic", "quintessential", "magnificent", 
        "revolutionary", "supernatural", "unforgettable", "transformative", "incredible", 
        "unbelievable", "breathtaking", "extraordinary", "incomprehensible", "monumental", 
        "revolutionary", "spectacular", "transformational", "unparalleled", "mind-blowing"
    ]
    
    let randomWord;
    let score = 0;
    let timer = 60;
    //focus on inputvalue at the start when we come to the page
    inputValue.focus();
    
    //Starting the timer to be reduced
    //This line sets up a timer that repeatedly calls the updateTime function every 1000 milliseconds
    const timeInterval = setInterval(updateTime,1000)
    
    function updateTime(){
     timer--;
     timercounter.innerHTML = timer+'s';
     if(timer === 0){
        clearInterval(timeInterval);
        gameOver();
     } 
    }
    
    function gameOver(){
        over.innerHTML = `
        <h1>Time is over!</h1>
        <h3> your final score is ${score} </h3>
        `
        document.querySelector(".reload").style.visibility = "visible";
        document.querySelector(".value").disabled = true;
    }
    
    function getRandomWord(){
        return words[Math.floor(Math.random()* words.length)];
    }
    
    function attachwordToDom(){
        randomWord = getRandomWord();
        word.innerHTML = randomWord;
    }
    
    attachwordToDom();
    
    inputValue.addEventListener('input',e => {
        const enteredText = e.target.value;
        if(enteredText === randomWord){
            //change and bring a new word
            attachwordToDom();
            //update the score
            updateScore();
            //clear the word too
            e.target.value = '';
        }
    
        e.target.classList.add('incorrect');
    
    })
    
    function updateScore() { 
        score++;
        scores.innerHTML = score;
    }
    
    //Selecting difficulty
    
    difficulty.addEventListener('change', e => {
      const  selectedDifficulty = e.target.value;
      switch(selectedDifficulty) {
        case 'Easy':
            timer = 70;  // 70 seconds for easy
            break;
        case 'Medium':
            timer = 60;  // 60 seconds for medium
            break;
        case 'Hard':
            timer = 40;  // 40 seconds for hard
            break;
        default:
            timer = 60;  // default to medium if something goes wrong
    }
    // Update the time left in the DOM
    timercounter.innerHTML = timer + 's';
    //disabling so that the user can not change the difficulty in the same game session
    document.querySelector(".difficulty").disabled = true;
    // If the timer is below 0 (e.g., after subtracting for Hard), make sure it doesn't go negative
    if (timer < 0) {
        timer = 0;
        timercounter.innerHTML = timer + 's';
    }
    });
}
const words = [ 
    "lightning", "whisper", "mountain", "adventure", "silence", 
    "dream", "butterfly", "ocean", "revolution", "melody", 
    "spark", "moonlight", "journey", "courage", "harmony", 
    "rhythm", "galaxy", "freedom", "wonder", "passion", 
    "sunrise", "echo", "wisdom", "miracle", "treasure", 
    "horizon", "imagination", "spirit", "thunder", "crystal", 
    "phoenix", "storm", "warrior", "enchantment", "universe", 
    "radiance", "destiny", "mystery", "triumph", "serenity", 
    "cascade", "whispers", "eclipse", "momentum", "wanderer", 
    "twilight", "revelation", "infinity", "essence", "tranquility",
    "extraordinary", "imagination", "enthusiastic", "revolutionary", "magnificent", 
    "serendipitous", "transformation", "breathtaking", "spectacular", "unbelievable", 
    "inconceivable", "unforgettable", "sophisticated", "illuminating", "challenging", 
    "adventurous", "breathless", "supernatural", "mesmerizing", "exploration", 
    "inspirational", "incomparable", "revolutionary", "phenomenal", "overwhelming", 
    "astonishing", "unconditional", "extraordinary", "miraculous", "captivating", 
    "thunderstruck", "unpredictable", "enthusiastic", "quintessential", "magnificent", 
    "revolutionary", "supernatural", "unforgettable", "transformative", "incredible", 
    "unbelievable", "breathtaking", "extraordinary", "incomprehensible", "monumental", 
    "revolutionary", "spectacular", "transformational", "unparalleled", "mind-blowing"
]

let randomWord;
let score = 0;
let timer = 10;
//focus on inputvalue at the start when we come to the page
inputValue.focus();

//Starting the timer to be reduced
const timeInterval = setInterval(updateTime,1000)

function updateTime(){
 timer--;
 timercounter.innerHTML = timer+'s';
 if(timer === 0){
    clearInterval(timeInterval);
    gameOver();
 } 
}

function gameOver(){
    over.innerHTML = `
    <h1>Time is over!</h1>
    <h3> your final score is ${score} </h3>
    `
    document.querySelector(".reload").style.visibility = "visible";
    document.querySelector(".value").disabled = true;
    // Now all we want to do is, we want to refresh the page when the reload button is clicked
    reloaded.addEventListener('click', () => {
        location.reload(); 
        score = 0; 
    });
}

function getRandomWord(){
    return words[Math.floor(Math.random()* words.length)];
}

function attachwordToDom(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

attachwordToDom();

inputValue.addEventListener('input',e => {
    const enteredText = e.target.value;
    if(enteredText === randomWord){
        //change and bring a new word
        attachwordToDom();
        //update the score
        updateScore();
        //clear the word too
        e.target.value = '';
    }

    e.target.classList.add('incorrect');

})
function updateScore() { 
    score++;
    scores.innerHTML = score;
}
startGame();
