let nightModeBtn = document.querySelector('.nightMode');
let normalMode = document.querySelector('.normalMode');
let calcContainer = document.querySelector('.container');
let display = document.getElementById('displayid');



nightModeBtn.children[0].style.color = "white";

normalMode.addEventListener("click", function(){
    calcContainer.style.backgroundColor = "white";
    calcContainer.style.transition = "0.7s";
    nightModeBtn.children[0].style.color = "white";
    this.children[0].style.color = "black";
    display.style.color = "black";
});

nightModeBtn.addEventListener("click", function(){
    calcContainer.style.backgroundColor = "black";
    calcContainer.style.transition = "0.7s";
    normalMode.children[0].style.color = "white";
    this.children[0].style.color = "black";
    display.style.color = "white";
});

let displayValue = '';

function updateDisplay(){
    display.innerHTML = displayValue;
}

function appendToDisplay(value){
    displayValue +=value;
    updateDisplay();
}

function clearall(){
    displayValue = '';
    updateDisplay();
}

function clear(){
    displayValue = displayValue.slice(0,-1);
    updateDisplay();
}

function calculate(){
    try{
        const result = eval(displayValue);
        displayValue = isFinite(result)? result.toString() : "Infinity";
        displayValue = isNaN(result)? "NaN" : displayValue;
        updateDisplay();
    }

    catch(error){
        displayValue = " Syntax Error";
        updateDisplay();
    }
    
}


