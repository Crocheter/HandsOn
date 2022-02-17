let runningTotals = 0;
let buffer = "0"
let previousOperator;
const screen = document.querySelector('.screen');

document
.querySelector('.calc-buttons')
.addEventListener('click', function(event) {
    buttonClick(event.target.innerText);
})

function buttonClick(value) {
    if (isNaN(parseInt(value))) {

    } else {
        handleNumber(value);
    }
}

function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
    rerender();
}

function handleSymbol(value) {
    switch (value){
        case 'C':
            buffer = 0;
            runningTotals = 0;
            break;
        case "=":
            if (previousOperator === null){
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = "" + runningTotals;
            runningTotals = 0;
            break;
        case
    }
}

function rerender() {
    screen.innerText = buffer;
}

