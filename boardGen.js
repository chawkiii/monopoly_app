// création du board et des cases
const board = document.querySelector('.board');

// Crée une case avec ses enfants
function createCase(className, cardNameText, imgSrc) {
    const caseDiv = document.createElement('div');
    caseDiv.classList.add('case');
    className.split(' ').forEach(cls => caseDiv.classList.add(cls)); // Ajouter chaque classe séparément

    const cardNameDiv = document.createElement('div');
    cardNameDiv.classList.add('cardName');
    cardNameDiv.textContent = cardNameText;

    const img = document.createElement('img');
    img.classList.add('cardImg');
    img.src = imgSrc;

    caseDiv.appendChild(cardNameDiv);
    caseDiv.appendChild(img);

    return caseDiv;
}

// Génère chaque rangée et l'ajoute au plateau
function generateBoard() {
    casesData.forEach(casesData => {
        const row = document.querySelector(`.${casesData.className}`);
        casesData.cases.forEach(caseData => {
            const { className, cardNameText, imgSrc } = caseData;
            const caseDiv = createCase(className, cardNameText, imgSrc);
            row.appendChild(caseDiv);
        });
    });
}
generateBoard();   
