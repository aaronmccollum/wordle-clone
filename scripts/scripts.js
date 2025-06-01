const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const answer = "sweat";


// Function that checks the word against the answer and changes background colors of squares if correct
const checkWord = (word) => {

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

    const answerArray = answer.toLowerCase().split("");
    const guessArray = [
        [row1box0Value, row1box1Value, row1box2Value, row1box3Value, row1box4Value],
        [row2box0Value, row2box1Value, row2box2Value, row2box3Value, row2box4Value]
    ];

    console.log("Answer array: " + answerArray);
    console.log(guessArray);

    for (let i = 0; i < guessArray.length; i++) {
        let count = 0;
        let currentRowBeingChecked = guessArray[i];

        for (let j = 0; j < currentRowBeingChecked.length; j++) {
            let currentRowIndex = i + 1;

            if (answerArray.includes(currentRowBeingChecked[j])) {
                let targetId = "row" + currentRowIndex.toString() + "box" + j.toString();
                console.log(targetId);
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
