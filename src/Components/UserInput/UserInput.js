import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

function UserInput(props) {

	const { updateValues } = props;
	const initialInputState = { number: "", isSwitch: false };
	const [eachEntry, setEachEntry] = useState(initialInputState);
	const { number, isSwitch } = eachEntry;

	const handleInputChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;

		setEachEntry({ ...eachEntry, [event.target.name]: value });
	};

	const handleSubmit = () => {
		updateValues(eachEntry);
	};

	return (
		<div>
			{console.log(isSwitch, "s")}
			<Row className="mt-4">
				<Col sm="12" md={{ size: 6, offset: 3 }}>
					<Form>
						<FormGroup>
							<Label for="number">Number of simulations</Label>
							<Input
								name="number"
								type="number"
								placeholder="e.g. 10, 20"
								onChange={handleInputChange}
								value={number}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="isSwitch">Switch</Label>
							<input
								name="isSwitch" type="checkbox"
								checked={isSwitch}
								onChange={handleInputChange}
							/>
						</FormGroup>
						<Button color="info" onClick={handleSubmit}>Simulate</Button>
					</Form>
				</Col>
			</Row>
		</div>
	);
}

export default UserInput;
