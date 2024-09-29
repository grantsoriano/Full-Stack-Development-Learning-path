const math = mathjs; // For browser
const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(input){
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