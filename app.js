/*GAME FUNCTION:
-Player must guess a number between a min and a max
-Player gets a certain amount of guesses
-Notify player of guesses remaining
-Notify the player of the correct answer if they lose
-Let player choose to play again
*/

// Game values

let min=1,
    max=10,
    winningNum = 2,
    guessesLeft=3;

    //UI elements

    const game=document.querySelector('#game'),
        minNum=document.querySelector('.min-num'),
        maxNum=document.querySelector('.max-num'),
        guessBtn=document.querySelector('#guess-btn')
        guessInput=document.querySelector('#guess-input')
        message=document.querySelector('.message')

        //Assign UI min and max
        minNum.textContent = min;
        maxNum.textContent=max;

        //Listen for guess
        guessBtn.addEventListener('click',function(){
            let guess=Number(guessInput.value)
            console.log(guess)
            //Validate input
          if(isNaN(guess) || guess < min || guess > max){
                setMessage(`Please enter a number between ${min} and ${max}`,'red')
          }
        })

        //Set message
        function setMessage(msg,color){
            message.textContent = msg
            message.style.color=color;
        }