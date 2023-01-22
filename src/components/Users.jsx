import React, { useState, useEffect } from "react";
import styles from "./Users.module.css";

function Users() {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);


	function inputHandler(event){
		setUser(event.target.value)
	}

	function selectHandler(event) {
		setUser(event.target.innerText);
	}
	
	function submitHandler() {
		console.log("Search button clicked");
	}


	return (
		<div className={styles.container}>
			<h1>Users</h1>
			<div className={styles.inputArea}>
				<input value={user} onChange={(event) => inputHandler(event)} />
				<div className={styles.dropdown}>
					{users &&
						users
							.filter((currentUser) => {
								return user && currentUser.name != user && currentUser.name.toLowerCase().startsWith(user.toLocaleLowerCase());
							})
							.map((currentUser, index) => {
								return (
									<div
										className={styles.dropdownItem}
										key={index}
										onClick={(event) => {
											selectHandler(event);
										}}
									>
										{currentUser.name}
									</div>
								);
							})}
				</div>
				<button onClick={submitHandler}>Search</button>
			</div>
		</div>
	);
}

export default Users;
