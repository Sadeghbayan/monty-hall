import React, { useState } from "react";
import "./App.scss";
import {Container, Alert, Row, Col} from 'reactstrap';
import UserInput from '../UserInput/UserInput'
import useSimulateRequest from '../../CustomHooks/useSimulateRequest'
import List from '../List/List'

function App() {
	const [formValues, setFormValues] = useState({});

	const {
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
				<Container>
					<UserInput updateValues={updateValues}/>
					<Row className="mt-4">
						<Col sm="12" md={{ size: 6, offset: 3 }}>
							<div className="mt-4">{error && (
								<Alert color="danger">
									Check the number in the above form!
								</Alert>
							)}</div>
						</Col>
					</Row>
					{result && <List records={result}/> }
				</Container>
			</div>
	);
}

export default App;
