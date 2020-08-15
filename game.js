const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-computer-score]')
const SELECTIONS = [
    {
    name: 'rock',
    emoji: '🗿',
    beats: 'scissors',
},
{
    name: 'scissors',
    emoji: '✂️',
    beats: 'paper'
},
{
    name: 'paper',
    emoji: '📃',
    beats: 'rock'
}
]

selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', e => {
        const selectionName = selectionButtons.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selectionName)
        console.log(selectionName);
    })
})

function makeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

addSelectionResults(computerSelection, computerWins)
addSelectionResults(computerSelection, youWins) 
if (yourWinner) incrementScore(yourScoreSpan)
if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResults(selection,winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('results-selection')
    if (winner)  div.classList.add('results-selection')
    
finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponent.name
}

    function randomSelection() {
        const randomIndex = Math.floor (Math.random() * SELECTIONS.length)
        return SELECTIONS[randomIndex]
    }

    function winner(selection, opponent){
        return selection.beats === opponent.name
    }


function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) +1
}


function addResults(selection, winners){
const div = document.createElement('div')
div.innerText = selection.emoji 
if (winner) div.classList.add('winner')
finalColumn.after(div)
}

