let nightModeBtn = document.querySelector('.nightMode');
let normalMode = document.querySelector('.normalMode');
let calcContainer = document.querySelector('.container');
let display = document.getElementById('displayid');

let allclearBtn = document.getElementById('allClearBtn');
let clearBtn = document.getElementById('clearBtn');
let moduloBtn = document.getElementById('moduloBtn');
let divideBtn = document.getElementById('divideBtn');
let sevenBtn = document.getElementById('seven');
let eightBtn = document.getElementById('eight');
let nineBtn = document.getElementById('nine');
let multiplyBtn = document.getElementById('multiplyBtn');
let fourBtn = document.getElementById('four');
let fiveBtn = document.getElementById('five');
let sixBtn = document.getElementById('six');
let minusBtn = document.getElementById('minusBtn');
let oneBtn = document.getElementById('one');
let twoBtn = document.getElementById('two');
let threeBtn = document.getElementById('three');
let plusBtn = document.getElementById('plusBtn');
let  zeroBtn = document.getElementById('zero');
let decimalBtn = document.getElementById('decimalBtn');
let equalsBtn = document.getElementById('equalsBtn');





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

allclearBtn.addEventListener("click", function(){
    
})