import { Component } from "react";
import "./Chess.scss";
import PieceMap from "./PieceMap";

class Chess extends Component {
  private Board: Array<string[]>;

  constructor(props: any) {
    super(props);
    this.Board = [
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
    ];
    this.seeBoard();
  }

  seeBlackSide() {
    let black = [
      ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
      ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ];
    for (let i = 0; i < black.length; i++) {
      for (let j = 0; j < black[i].length; j++) {
        this.Board[i][j] = black[i][j];
      }
    }
  }

  seeWhiteSide() {
    let white = [
      ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
      ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
    ];
    for (let i = 6; i < this.Board.length; i++) {
      for (let j = 0; j < white[i - 6].length; j++) {
        this.Board[i][j] = white[i - 6][j];
      }
    }
  }
  seeBoard() {
    this.seeBlackSide();
    this.seeWhiteSide();
  }

  render() {
    return (
      <div className="container">
        <div className="checkBoard">
          {this.Board.map((_, indexRow) => (
            <>
              {this.Board[indexRow].map((col, indexCol) => (
                <div
                  className={
                    "box " + (indexRow % 2 === indexCol % 2 ? "white" : "black")
                  }
                >
                  {col}
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default Chess;
