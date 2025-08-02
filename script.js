let currentInput = ""; 
const resultDisplay = document.getElementById("result"); 
 
function clrs() { 
    currentInput = ""; 
    resultDisplay.value = "0"; 
} 
 
function del() { 
    currentInput = currentInput.slice(0, -1); 
    resultDisplay.value = currentInput || "0"; 
} 
 
function display(value) { 
    currentInput += value; 
    resultDisplay.value = currentInput; 
} 
 
function calculate() { 
    try { 
        const result = eval(currentInput); 
         
        if (result !== undefined && !isNaN(result)) { 
            resultDisplay.value = result; 
        } else { 
            resultDisplay.value = "Error"; 
        } 
    } catch (error) { 
        resultDisplay.value = "Error"; 
    } 
}