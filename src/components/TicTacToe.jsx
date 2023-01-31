import React, { useState } from "react";
import styles from "./TicTacToe.module.css";

function TicTacToe() {
	const [board, setBoard] = useState(new Array(9).fill(""));
	const [player, setPlayer] = useState("X");
	const [winner, setWinner] = useState("");

	function handleMove(position) {
		if (winner === "" && board[position] === "") {
			board[position] = player;
			setBoard([...board]);
			setPlayer(player === "X" ? "Y" : "X");

			let winnerPattern = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6],
			];
			for (let pattern of winnerPattern) {
				if (board[pattern[0]] !== "" && board[pattern[0]] === board[pattern[1]] && board[pattern[1]] === board[pattern[2]]) {
					setWinner(board[pattern[0]]);
					break;
				}
			}
		}
	}

	return (
		<div className={styles.container}>
			<h1>Tic Tac Toe</h1>
			<div>Winner : {winner}</div>
			<div>Next : {player}</div>
			<div className={styles.board}>
				<div className={styles.box} onClick={() => handleMove(0)}>
					{board[0]}
				</div>
				<div className={styles.box} onClick={() => handleMove(1)}>
					{board[1]}
				</div>
				<div className={styles.box} onClick={() => handleMove(2)}>
					{board[2]}
				</div>
				<div className={styles.box} onClick={() => handleMove(3)}>
					{board[3]}
				</div>
				<div className={styles.box} onClick={() => handleMove(4)}>
					{board[4]}
				</div>
				<div className={styles.box} onClick={() => handleMove(5)}>
					{board[5]}
				</div>
				<div className={styles.box} onClick={() => handleMove(6)}>
					{board[6]}
				</div>
				<div className={styles.box} onClick={() => handleMove(7)}>
					{board[7]}
				</div>
				<div className={styles.box} onClick={() => handleMove(8)}>
					{board[8]}
				</div>
			</div>
		</div>
	);
}

export default TicTacToe;
