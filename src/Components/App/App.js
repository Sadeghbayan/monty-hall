import React, { useState } from "react";
import "./App.scss";
import { Table, Alert } from 'reactstrap';
import UserInput from '../UserInput/UserInput'
import useSimulateRequest from '../../CustomHooks/useSimulateRequest'


function App() {
	const [formValues, setFormValues] = useState({});

	const {
		loading,
		error,
		result
	} = useSimulateRequest(formValues)


	const updateValues = (item) => {
		setFormValues(item)
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>The Monty Hall Problem</h1>
			</header>

			<UserInput updateValues={updateValues}/>

			<div>{loading && 'Loading...'}</div>
			<div>{error && (
				<Alert color="danger">
					Check the number in the above form!
				</Alert>
			)}</div>

			<Table dark>
				<thead>
				<tr>
					<th>#</th>
					<th>Given number</th>
					<th>Switch</th>
					<th>Game wins</th>
				</tr>
				</thead>
				<tbody>
				{!loading && result.map((item, index) => {
					return (
						<tr key={index}>
							<th scope="row">{index}</th>
							<td>{item.number}</td>
							<td>{item.toSwitch ? 'Yes' : 'No'}</td>
							<td>{item.gamesReportWin}</td>
						</tr>
					)
				})}
				</tbody>
			</Table>
		</div>
	);
}

export default App;
