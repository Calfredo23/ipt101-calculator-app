let currentInput='';
let currentOperator='';

function appendNumber(number) {
    currentInput+=number;
    document.getElementById('result').value=currentInput;
}
function add() {
    currentOperator="+";
    currentInput+=currentOperator;
    document.getElementById('result').value=currentInput;
}
function times() {
    currentOperator="*";
    currentInput+=currentOperator;
    document.getElementById('result').value=currentInput;
}
function divide() {
    currentOperator="/";
    currentInput+=currentOperator;
    document.getElementById('result').value=currentInput;
}
function minus() {
    currentOperator="-";
    currentInput+=currentOperator;
    document.getElementById('result').value=currentInput;
}
function calculate() {
    const result=eval(currentInput);
    document.getElementById('result').value=result;
    currentInput=result.toString();
    currentOperator='';
}
function clearInput(){
    currentInput='';
    currentOperator='';
    document.getElementById('result').value='';
}
function delclearInput(){
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').value = currentInput;
}