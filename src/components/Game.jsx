import React, { useState } from 'react';
import './Game.css';
import Board from './Board';

const Game = () => {
  return (
    <div className="game">
      Tic-Tac-Toe
      <Board />
    </div>
  )
};

export default Game;