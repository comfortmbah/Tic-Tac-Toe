'use strict';

const Player = (player) => {
    this.player = player;

    const getPlayer = () => {
        return player;
    }

    return { getPlayer };
}

