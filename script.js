// Importation des données des cases
import { casesData } from './data.js';

document.addEventListener("DOMContentLoaded", function() {

    // Définition de la classe Player
    class Player {
        constructor(name, initialPosition) {
            this.name = name;
            this.position = initialPosition;
            this.money = 1500; 
        }

        // Méthode pour déplacer le joueur sur le plateau en fonction du nombre de cases
        move(numSpaces) {
            this.position += numSpaces;
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
        // Rechercher la case correspondant à la nouvelle position du joueur
        const targetCase = findCaseByPosition(newPosition);

        // Vérifier si la case cible a été trouvée
        if (targetCase) {
            // Créer un élément pour représenter le joueur
            const playerIcon = createPlayerIcon(playerName);

            // Ajouter l'icône du joueur à la case cible
            targetCase.appendChild(playerIcon);
        } else {
            console.error('La case cible est introuvable.');
        }
    }

    // Fonction pour rechercher une case par sa position
    function findCaseByPosition(position) {
        for (const row of casesData) {
            for (const caseData of row.cases) {
                if (caseData.caseNum === position) {
                    return document.querySelector(`.${caseData.className}`);
                }
            }
        }
        return null;
    }

    // Fonction pour créer l'icône du joueur
    function createPlayerIcon(playerName) {
        const playerIcon = document.createElement('div');
        playerIcon.classList.add('player-icon');
        playerIcon.textContent = playerName; // Vous pouvez aussi utiliser une image ou une autre icône pour représenter le joueur
        return playerIcon;
    }

    // Fonction pour simuler le déplacement d'un joueur
    function simulatePlayerMovement(player) {
        const diceRoll = Math.floor(Math.random() * 6) + 1; // Lancer de dé
        player.move(diceRoll);
    }

    // Gestion de l'initialisation du joueur
    document.addEventListener("DOMContentLoaded", function() {
        // Appel initial pour placer le joueur sur la case de départ
        simulatePlayerMovement(player1);
    });

    // Écouteur d'événement pour le bouton de simulation du déplacement du joueur
    const playButton = document.getElementById('play');
    playButton.addEventListener('click', function() {
        simulatePlayerMovement(player1);
    });

});
