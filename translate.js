function translatePageToEN() {
    let textA = document.getElementById('text-a');
    let textB = document.getElementById('text-b');
    let textC = document.getElementById('text-c');

    textA.innerHTML=textAEN;
    textB.innerHTML=textBEN;
    textC.innerHTML=textCEN;

    translatePageAutoEN();
}

function translatePageAutoEN(){
    document.querySelectorAll('body *').forEach(element => {
        let text = element.innerText;
        if (translationsToEN[text]) {
            element.innerText = translationsToEN[text];
        }
    
});
}

function trannslatePageToGER(){
    let textA = document.getElementById('text-a');
    let textB = document.getElementById('text-b');
    let textC = document.getElementById('text-c');

    textA.innerHTML=textAGER;
    textB.innerHTML=textBGER;
    textC.innerHTML=textCGER;

    translatePageAutoGER();
}

function translatePageAutoGER(){
    document.querySelectorAll('body *').forEach(element => {
        let text = element.innerText;
        if (translationsToGER[text]) {
            element.innerText = translationsToGER[text];
        }
    
});
}