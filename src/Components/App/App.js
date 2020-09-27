import React, { useState } from "react";
import "./App.scss";
import UserInput from '../UserInput/UserInput'
import useSimulateRequest from '../../CustomHooks/useSimulateRequest'


function App() {
	const [leaderboard, setLeaderboard] = useState([]);


	const {
		loading,
		error,
		result
	} = useSimulateRequest(leaderboard)


	const updateValues = (item) => {
		console.log(item, "sad")
		setLeaderboard([...leaderboard, item])
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>The Monty Hall Problem</h1>
			</header>

			<UserInput updateValues={updateValues}/>
		</div>
	);
}

export default App;
