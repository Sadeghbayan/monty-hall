import React from "react";
import {Table, Col, Row} from "reactstrap";
import "./List.scss"

function List(props) {

	const { records } = props;

	return (
		<Row className="mt-4">
			<Col sm="12" md={{ size: 6, offset: 3 }}>
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
					{records.map((item, index) => {
						return (
							<tr key={index} className="record-item">
								<th scope="row">{index}</th>
								<td>{item.number}</td>
								<td>{item.toSwitch ? 'Yes' : 'No'}</td>
								<td>{item.gamesReportWin}</td>
							</tr>
						)
					})}
					</tbody>
				</Table>
			</Col>
		</Row>
	)
}

export default List;
