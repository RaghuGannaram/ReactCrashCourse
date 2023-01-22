import React, { useState, useEffect, useCallback } from "react";
import styles from "./Users.module.css";
import debounce from "./debounce";

function Users() {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState("");
	const [userDetails, setUserDetails] = useState();

	// useEffect(() => {
	// 	fetch("https://jsonplaceholder.typicode.com/users")
	// 		.then((res) => res.json())
	// 		.then((data) => setUsers(data));
	// }, []);

	let debouncedFetch = useCallback(
		debounce(() => {
			fetch("https://jsonplaceholder.typicode.com/users")
				.then((res) => res.json())
				.then((data) => setUsers(data));
		}, 200),
		[]
	);

	function inputHandler(event) {
		setUser(event.target.value);
		debouncedFetch();
	}

	function selectHandler(event) {
		setUser(event.target.innerText);
	}

	function submitHandler() {
		console.log("Search button clicked");
		let details = users.filter((currentUser) => currentUser.name == user)[0];
		setUserDetails(details);
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
			<div className="info">
				<h4>Name: {userDetails && userDetails.name}</h4>
				<h4>Username : {userDetails && userDetails.username}</h4>
				<h4>Email ID : {userDetails && userDetails.email}</h4>
			</div>
		</div>
	);
}

export default Users;
