const optionBtn = document.querySelectorAll('div.optionBtn button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');


//refresh page for new game
resetBtn.addEventListener('click', () => location.reload());