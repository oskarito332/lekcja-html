const customEvent = {
    "id": 1,
    "title": "Święto Niepodległości",
    "subtitle": "Najważniejsze święto dla każdego patrioty",
    "date": "11/11/2023",
    "image": "images/flaga.jpg",
    "description": [
        "Święto Niepodległości Polski jest narodowym świętem obchodzonym w Polsce",
        "11 listopada, upamiętniającym odzyskanie niepodległości przez Polskę",
        "po 123 latach rozbiorów. Święto to jest okazją do wielu uroczystości",
        "i obchodów patriotycznych."
    ]
};

function createCard(cardData) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardImage = document.createElement('img');
    cardImage.classList.add('card-img');
    cardImage.setAttribute('src', cardData.image);
    cardImage.setAttribute('alt', cardData.title);

    // build card body

    const cardText = document.createElement('div');
    cardText.classList.add('card-text');

    // build card header
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    const cardTitle = document.createElement('h3');
    const cardDate = document.createElement('span');

    cardTitle.classList.add('card-title');
    cardDate.classList.add('card-date');
    cardTitle.innerHTML = cardData.title;
    cardDate.innerHTML = cardData.date;

    cardHeader.appendChild(cardTitle);
    cardHeader.appendChild(cardDate);
    
    // build card body
    
    const cardSubtitle = document.createElement('span');
    cardSubtitle.classList.add('card-subtitle');
    cardSubtitle.innerHTML = cardData.subtitle;
    
    const cardDescription = document.createElement('div');
    cardDescription.classList.add('card-desc');
    cardDescription.innerHTML = cardData.description[0] + ' ' + cardData.description[1];

    const cardLink = document.createElement('a');
    cardLink.classList.add('card-link', 'responsive-link');
    cardLink.innerHTML = 'Czytaj dalej...';
    
    cardText.appendChild(cardHeader);
    cardText.appendChild(cardSubtitle);
    cardText.appendChild(cardDescription);
    cardText.appendChild(cardLink);


    card.appendChild(cardImage);
    card.appendChild(cardText);

    console.log(card);
    return card;
}


function renderCars(card) {
    const container = document.querySelector('.container');
    container.appendChild(card);
}

function renderContent() {
    fetch('http://localhost:5000/events')
        .then(data => data.json())
        .then(data => {
            data.forEach(item => {
                const card = createCard(item);
                renderCars(card);
            })
        })

}

renderContent();
