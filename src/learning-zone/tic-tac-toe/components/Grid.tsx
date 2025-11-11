import { useState } from "react";
import GridSpace from "./GridSpace";

const Grid: React.FC = () => {
  const empty: string = "-";

  const [board, setBoard] = useState([
    [empty, empty, empty],
    [empty, empty, empty],
    [empty, empty, empty],
  ]);

  const [playerX, setPlayerX] = useState(true);
  const [winner, setWinner] = useState(empty);

  const takeTurn = (rowIdx: number, colIdx: number) => {
    console.log("Take turn for player", getPlayerString());
    if (winner === empty && board[rowIdx][colIdx] === empty) {
      console.log(
        "winner is not empty and this square is not empty...populate it"
      );
      populateBoard(rowIdx, colIdx);
      setPlayerX(!playerX);
      const winnerCheck = checkWinner();
      if (winnerCheck !== empty) {
        setWinner(winnerCheck);
        console.log("Winner found; winner is player", winnerCheck);
      }
    } else {
      console.log("Space is occupied");
    }
  };

  const getPlayerString = () => {
    return playerX ? "X" : "O";
  };

  const populateBoard = (rowIdx: number, colIdx: number) => {
    console.log("Populating board space", rowIdx, colIdx);
    // TODO: We aren't using setBoard, but the component is updating as if we are. Is this a problem?
    board[rowIdx][colIdx] = getPlayerString();
  };

  const checkWinner = () => {
    for (let i = 0; i < board.length; i++) {
      const el = board[i][i];
      // Check Horizontal
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] !== el) break;
        if (j === board[i].length - 1) return el;
      }

      // Check vertical.
      for (let j = 0; j < board[i].length; j++) {
        if (board[j][i] !== el) break;
        if (j === board[i].length - 1) return el;
      }
    }

    // Check diagonal.
    const centerEl = board[Math.floor(board.length / 2)][board.length % 2];
    for (let i = 0; i < board.length; i++) {
      if (board[i][i] !== centerEl) break;
      if (i === board[i].length - 1) return centerEl;
    }
    for (let i = 0; i < board.length; i++) {
      if (board[i][board.length - 1 - i] !== centerEl) break;
      if (i === board[i].length - 1) return centerEl;
    }

    return empty;
  };

  const resetBoard = () => {
    setBoard([
      [empty, empty, empty],
      [empty, empty, empty],
      [empty, empty, empty],
    ]);
    setWinner(empty);
  };

  return (
    <div className="text-white w-full text-center">
      <div className="text-white flex flex-row w-full justify-center">
        {board.map((row, rowIdx) => (
          <div className="">
            {row.map((val, colIdx) => (
              <GridSpace
                onClick={() => takeTurn(rowIdx, colIdx)}
                player={board[rowIdx][colIdx]}
              />
            ))}
          </div>
        ))}
      </div>
      {winner !== empty ? <p>{winner} wins!</p> : ""}
      <button
        onClick={resetBoard}
        className="py-2 px-6 m-2 border-1 rounded-4xl hover:text-black hover:bg-white transition cursor-pointer"
      >
        Reset
      </button>
    </div>
  );
};

export default Grid;
