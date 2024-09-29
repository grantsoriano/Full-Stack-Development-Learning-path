const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(input){
    try{
        const expression = display.value;
        const result = math.evaluate(expression);
        display.value = result;
    }
    catch(error){
        display.value = "Error";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // You can add any additional initialization here if needed
});