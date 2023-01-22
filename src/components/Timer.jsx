import React, { useState, useEffect } from "react";

function Timer() {
	const [count, setCount] = useState(0);
	const [ticking, setTicking] = useState(false);

	useEffect(() => {
		let interval = null;

		if (ticking) {
			interval = setInterval(() => {
				setCount((count) => count + 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [ticking]);

	return (
		<>
			<h1>Timer</h1>

			<div>{count}</div>

			<table>
				<tbody>
					<tr>
						<td>
							<button onClick={() => setTicking(true)}>Start</button>
						</td>
						<td>
							<button onClick={() => setTicking(false)}>Pause</button>
						</td>
						<td>
							<button onClick={() => setTicking(true)}>Resume</button>
						</td>
						<td>
							<button
								onClick={() => {
									setCount(0);
									setTicking(false);
								}}
							>
								Reset
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default Timer;
