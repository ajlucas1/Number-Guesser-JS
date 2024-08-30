'use strict';

const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessResponse = document.querySelector('.message')
const highScore = document.querySelector('.highscore')
const currentScore = document.querySelector('.score')
const guessInput = document.querySelector('.guess')
const correctNumber = document.querySelector('.number')
const body = document.querySelector('body')


let randomNumber = Math.trunc((Math.random() * 20) + 1)
console.log(randomNumber);

const clickFunction = function() {
    if(guessInput.value == randomNumber) {
        guessResponse.textContent = 'You Guessed the Correct Score!!! YOU WIN'
        correctNumber.textContent = `${randomNumber}`
        body.style.backgroundColor = 'green'
        if(highScore.textContent < currentScore.textContent) highScore.textContent = currentScore.textContent
    } else if (guessInput.value !== randomNumber) {
        guessInput.value > randomNumber ? guessResponse.textContent = 'You guessed to high! Try again...' : guessResponse.textContent = 'You guessed to low! Try again.....'
        body.style.backgroundColor = 'red'
        currentScore.textContent--
    }
}

const resetFunction = function() {
    randomNumber = Math.trunc((Math.random() * 20) + 1)
    currentScore.textContent = '20'
    guessResponse.textContent = 'Start guessing...'
    correctNumber.textContent = '?'
    guessInput.value = ''
    body.style.backgroundColor = 'black'
}

checkButton.addEventListener('click', clickFunction )
againButton.addEventListener('click', resetFunction)

