const URL_FIFA = 'https://api.sportmonks.com/v3/core/countries?api_token=AYq4Nwvy4X5L0zvWrtkclMzhGdPSgGWQNJ16v238LBbOkh3VCcAdWOfSRZHY&include=leagues;';
let currentIndex = 0;


function init() {
    moveTextToWindow();
    getData();
    showCardsWithOpacity();
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
            checkWindowInnerHeight(rect, hiddenText);
        });
        hiddenTextRight.forEach(hiddenText => {
            const rect = hiddenText.getBoundingClientRect();
            checkWindowInnerHeight(rect, hiddenText);
        })
    });
}

function checkWindowInnerHeight(rect, hiddenText) {
    rect.top <= window.innerHeight && rect.bottom >= 0 ?
        hiddenText.classList.add('visible') : hiddenText.classList.remove('visible');
}

function renderCards(data) {
    let country = document.getElementById('all-countries');
    console.log(data['data']);
    for (i = 0; i < 16; i++) {
        if (i == 9) {
            continue
        }
        country.innerHTML += renderCardsHTML(data);
    }
}

function showCardsWithOpacity() {
    window.addEventListener('scroll', () => {
        let hiddenCard = document.querySelectorAll('.hidden-card');
        hiddenCard.forEach(card => {
            const rect = card.getBoundingClientRect();
            checkWindowInnerHeightForCards(rect, card);
        })
    });
}

function checkWindowInnerHeightForCards(rect, card) {
    rect.top <= window.innerHeight && rect.bottom >= 0 ?
        card.classList.add('card-visible') : card.classList.remove('card-visible');
}

function switchTextRight() {
    let text = document.querySelectorAll('.history-container');

    if (currentIndex<=1){
    text[currentIndex].classList.remove('active');
    text[currentIndex].classList.add('hidden-left');

    text[currentIndex+1].classList.remove('hidden-right');
    text[currentIndex+1].classList.add('active');
    currentIndex++;
    }

}
function switchTextLeft() {
    let text = document.querySelectorAll('.history-container');

    if (currentIndex>0){
    text[currentIndex].classList.remove('active');
    text[currentIndex].classList.add('hidden-right');

    text[currentIndex-1].classList.remove('hidden-left');
    text[currentIndex-1].classList.add('active');
    currentIndex--;
    }

}