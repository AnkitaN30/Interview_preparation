import { useState } from "react";
import "./TicTacToeComponent.css";

const initalBoard = () => Array(9).fill(null);

const TicTacToeComponent = () => {
  const [board, setBoardSize] = useState(initalBoard());
  const [isXNext, setIsNext] = useState(true);
  const WINNING_PATTERN = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if(winner){ 
      return `Player  ${winner} wins!!!`;
    }
    if(!board.includes(null)) {
      return `Its a draw`;
    }
    return `Player ${isXNext? 'X':'O'} turn`;
  };

  const resetGame = () => {
    setBoardSize(initalBoard());
    setIsNext(true);
  };

  
  const calculateWinner = (currentBoard) => {
    // console.log(currentBoard,'currentBoard')
    for (let i = 0; i < WINNING_PATTERN.length; i++) {
      const [a,b,c] = WINNING_PATTERN[i];
        
      if(currentBoard[a] && 
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
       ){
        return currentBoard[a];
       }
    }
    return null;
  };

  const handleClick = (index) => {
    //check for winner first;
    const winner = calculateWinner(board);

    if(winner || board[index]) return;
    
    const newBoard = [...board];
    newBoard[index]=isXNext?'X':'O';
    setBoardSize(newBoard)
    setIsNext(!isXNext)
  };


  return (
    <div className="game">
      <div className="status">
       {getStatusMessage()}<button className="reset" onClick={resetGame}>Reset game</button>
      </div>

      <div className="board">
        {board?.map((player, index) => {
          return (
            <button 
              className="cell" 
              key={index}
              onClick={()=>handleClick(index)}
              disabled={player !== null}
              >
              {player}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToeComponent;
