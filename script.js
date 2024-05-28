const URL_FIFA = 'https://api.sportmonks.com/v3/core/countries?api_token=AYq4Nwvy4X5L0zvWrtkclMzhGdPSgGWQNJ16v238LBbOkh3VCcAdWOfSRZHY&include=leagues;';


function init(){
    moveTextToWindow();
    getData();
}


async function getData() {
    try {
        const respone = await fetch(URL_FIFA);
        const result = await respone.json();
        console.log(result);
        renderCards(result);
    } catch (error) {
        console.log(error);
    }
}


function moveTextToWindow() {
    window.addEventListener('scroll', () => {
        const hiddenTexts = document.querySelectorAll('.hidden-text');
        const hiddenTextRight = document.querySelectorAll('.hidden-text-right');
        hiddenTexts.forEach(hiddenText => {
            const rect = hiddenText.getBoundingClientRect();
            checkWindowInnerHeight(rect,hiddenText);
        });
        hiddenTextRight.forEach(hiddenText => {
            const rect = hiddenText.getBoundingClientRect();
            checkWindowInnerHeight(rect,hiddenText);
        })
    });
}

function checkWindowInnerHeight(rect,hiddenText){
    rect.top <= window.innerHeight && rect.bottom >= 0?
    hiddenText.classList.add('visible'): hiddenText.classList.remove('visible');
}

function renderCards(data){
    let country = document.getElementById('all-countries');
    console.log(data['data']);
    for (i=0; i<data['data'].length; i++){
        country.innerHTML+= `
        <div class="card"> 
            <img src="${data['data'][i]['image_path']}">
        </div>`
    }
}