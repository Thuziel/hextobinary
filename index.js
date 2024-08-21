let question = null;

const checkBtn = document.querySelector("#check");
const userInputRef = document.querySelector("#input");
const questionRef = document.querySelector("#question");
//const r = document.querySelector(":root");

function generateNibble() {
    let nibble = [];
    for (let i = 0; i < 4; i++) {
        nibble.push(Math.floor(Math.random() * 2));
    }
    return nibble;
}

function nibbleToNumber(nibble) {
    let total = 0;
    for (let i = 0; i < nibble.length; i++) {
        total += (nibble[i] * (2 ** (3 - i)));
    }
    return total;
}

function numberToHex(number) {
    let hex = '';
    if (number == 10) {
        hex = "A";
    } else if (number == 11) {
        hex = "B";
    } else if (number == 12) {
        hex = "C";
    } else if (number == 13) {
        hex = "D";
    } else if (number == 14) {
        hex = "E";
    } else if (number == 15) {
        hex = "F";
    } else {
        hex = number.toString();
    }
    return hex;
}

function generateByte() {
    let byteArray = [generateNibble(), generateNibble()];
    let binaryByte = "";
    let hexByte = "";

    for (let i = 0; i < byteArray.length; i++) {
        hexByte += numberToHex(nibbleToNumber(byteArray[i]));
        for (let j = 0; j < byteArray[i].length; j++) {
            binaryByte += byteArray[i][j].toString();
        }
        
    }


    
    return [hexByte, binaryByte];
}

function updateDOM(question) {
    questionRef.textContent = question;
}

function askQuestion() {
    question = generateByte();
    updateDOM(question[0]);
}

function userInputCheck(userInput, question) {
    if (userInput == question[1]) {
        return true;
    } 
    return false;
}

function clearInput() {
    userInputRef.value = "";
}

function changeButtonBackground(state) {
    if(state == false) {
        r.style.setProperty('--btnBackground', 'rgba(255, 0, 0, 0.4)');
    } else if (state == true) {
        r.style.setProperty('--btnBackground', 'rgba(4, 255, 0, 0.4)');
    } else {
        r.style.setProperty('--btnBackground', 'rgb(35, 49, 120)');
    }
}

function userInteraction() {
    let userInput = userInputRef.value;
    if(userInputCheck(userInput, question)) {
        //changeButtonBackground(true)
        clearInput();
        askQuestion();
    } else {
        //changeButtonBackground(false);
    }
    setTimeout(() => {
        //changeButtonBackground(null);
    }, 250)
}

checkBtn.addEventListener("click", () => {
    userInteraction();
})

document.addEventListener("keypress", (e) => {
    if(e.key == "Enter") {
        userInteraction();
    }
})

askQuestion();