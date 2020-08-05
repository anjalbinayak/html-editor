let inputBox =  document.querySelector('#code-input');
let outputBox = document.querySelector('#code-output');
inputBox.addEventListener('keydown', function(){
    let content = this.innerText;
    outputBox.innerHTML = content;
});

outputBox.addEventListener('keydown', function(){
    let content = this.innerHTML;
    inputBox.innerText = content;
});







