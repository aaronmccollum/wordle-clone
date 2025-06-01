import words from "../fiveLetterEnglishWords.json" with { type: 'json' };

const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');

// Get random word from database for the game
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getGameAnswer = () => {
    const wordsArray = words.words;
    return wordsArray[getRandomInt(0, wordsArray.length - 1)];
}

const answer = getGameAnswer();
console.log("The answer is: " + answer);



// Function that checks the word against the answer and changes background colors of squares if correct
const checkWord = (word) => {

    // Getting the values of each square and setting them into an array
    let row1box0Value = document.getElementById('row1box0').value.toLowerCase();
    let row1box1Value = document.getElementById('row1box1').value.toLowerCase();
    let row1box2Value = document.getElementById('row1box2').value.toLowerCase();
    let row1box3Value = document.getElementById('row1box3').value.toLowerCase();
    let row1box4Value = document.getElementById('row1box4').value.toLowerCase();

    let row2box0Value = document.getElementById('row2box0').value.toLowerCase();
    let row2box1Value = document.getElementById('row2box1').value.toLowerCase();
    let row2box2Value = document.getElementById('row2box2').value.toLowerCase();
    let row2box3Value = document.getElementById('row2box3').value.toLowerCase();
    let row2box4Value = document.getElementById('row2box4').value.toLowerCase();

    let row3box0Value = document.getElementById('row3box0').value.toLowerCase();
    let row3box1Value = document.getElementById('row3box1').value.toLowerCase();
    let row3box2Value = document.getElementById('row3box2').value.toLowerCase();
    let row3box3Value = document.getElementById('row3box3').value.toLowerCase();
    let row3box4Value = document.getElementById('row3box4').value.toLowerCase();

    let row4box0Value = document.getElementById('row4box0').value.toLowerCase();
    let row4box1Value = document.getElementById('row4box1').value.toLowerCase();
    let row4box2Value = document.getElementById('row4box2').value.toLowerCase();
    let row4box3Value = document.getElementById('row4box3').value.toLowerCase();
    let row4box4Value = document.getElementById('row4box4').value.toLowerCase();

    let row5box0Value = document.getElementById('row5box0').value.toLowerCase();
    let row5box1Value = document.getElementById('row5box1').value.toLowerCase();
    let row5box2Value = document.getElementById('row5box2').value.toLowerCase();
    let row5box3Value = document.getElementById('row5box3').value.toLowerCase();
    let row5box4Value = document.getElementById('row5box4').value.toLowerCase();

    const answerArray = answer.toLowerCase().split("");
    const guessArray = [
        [row1box0Value, row1box1Value, row1box2Value, row1box3Value, row1box4Value],
        [row2box0Value, row2box1Value, row2box2Value, row2box3Value, row2box4Value],
        [row3box0Value, row3box1Value, row3box2Value, row3box3Value, row3box4Value],
        [row4box0Value, row4box1Value, row4box2Value, row4box3Value, row4box4Value],
        [row5box0Value, row5box1Value, row5box2Value, row5box3Value, row5box4Value]
    ];

    // Looping through to check the values of each square
    for (let i = 0; i < guessArray.length; i++) {
        let count = 0;
        let currentRowBeingChecked = guessArray[i];

        for (let j = 0; j < currentRowBeingChecked.length; j++) {
            let currentRowIndex = i + 1;

            if (answerArray.includes(currentRowBeingChecked[j])) {
                let targetId = "row" + currentRowIndex.toString() + "box" + j.toString();
                let target = document.getElementById(targetId);
                target.style.backgroundColor = "#FFEE8C";
            }

            if (answerArray[j] === currentRowBeingChecked[j]) {
                let targetId = "row" + currentRowIndex.toString() + "box" + j.toString();
                let target = document.getElementById(targetId);
                target.style.backgroundColor = "#77DD77";
                count += 1;
            }
        }

        if (count === 5) {
            document.getElementById('success-message').innerText += "Congratulations! You got the word!";
        } else {
            count = 0;
        }
    }

}


// Functions to clear out the Wordle board
const resetBoard = () => {
    const boardHeight = 5;

    for (let i = 1; i <= boardHeight; i++) {
        clearWordleRow(i);
    }

    document.getElementById('success-message').innerText = "";
}

const clearWordleRow = (rowNumber) => {
    const rowLength = 5;
    const row = "row" + rowNumber.toString() + "box";

    for (let i = 0; i < rowLength; i++) {
        let rowID = row + i.toString();
        document.getElementById(rowID).value = "";
        document.getElementById(rowID).style.backgroundColor = "white";
    }
}

// Event listeners
submitButton.addEventListener('click', checkWord);
resetButton.addEventListener('click', resetBoard);
