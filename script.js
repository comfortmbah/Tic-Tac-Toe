'use strict';

const Player = (player) => {
    this.player = player;

    const getPlayer = () => {
        return player;
    }

    return { getPlayer };
}

const gameBoard = (() => {
    const board = ["", "", "", "", "", "", ""];

    const setField = (index, player) => {
        if (index > board.length) return;
        board[index] = player;
    }

    const getField = (index) => {
        if (index > board.length) return;
        return board[index];
    }

    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
        }
    }

    return { setField, getField, reset };
})();

