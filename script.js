// Définition de la classe Player
class Player {
    constructor(name, initialPosition) {
        this.name = name;
        this.position = initialPosition;
        this.money = 1500; // Solde d'argent initial
    }

    // Méthode pour déplacer le joueur sur le plateau en fonction du nombre de cases
    move(numSpaces) {
        this.position += numSpaces;
        // Gérer les cas où le joueur passe par la case départ
        // ou atterrit sur une propriété, une case spéciale, etc.
        console.log(`${this.name} avance de ${numSpaces} cases.`);
        // Mettre à jour l'affichage pour refléter le nouveau positionnement du joueur sur le plateau
        updatePlayerPositionOnBoard(this.name, this.position);
    }

    // Autres méthodes pour gérer l'argent, les transactions, etc.
}

// Création des joueurs
const player1 = new Player('Joueur 1', 0); // Position initiale : départ
const player2 = new Player('Joueur 2', 0);

// Fonction pour mettre à jour la position du joueur sur le plateau dans l'interface utilisateur
function updatePlayerPositionOnBoard(playerName, newPosition) {
    const playerIcon = document.createElement('div');
    playerIcon.classList.add('player-icon');
    playerIcon.textContent = playerName; // Vous pouvez remplacer le texte par une icône si vous le souhaitez

    const targetCase = document.querySelector(`.case:nth-child(${newPosition + 1})`);
    targetCase.appendChild(playerIcon);
}

// Fonction pour simuler le déplacement d'un joueur
function simulatePlayerMovement(player) {
    const diceRoll = Math.floor(Math.random() * 6) + 1; // Lancer de dé
    player.move(diceRoll);
}

// Simulation du déplacement du joueur 1
simulatePlayerMovement(player1);


