class LudoGame {
    constructor(players) {
        this.players = players; // array of player objects
        this.state = {};        // actual board state, pieces positions, etc.
        this.turn = 0;
        this.dice = 0;
    }

    rollDice() {
        this.dice = Math.floor(Math.random() * 6) + 1;
        return this.dice;
    }

    movePiece(playerId, pieceId) {
        // Check if it's player's turn, piece is movable, update state accordingly, return new state
    }

    getGameState() {
        return this.state;
    }
}

module.exports = LudoGame;