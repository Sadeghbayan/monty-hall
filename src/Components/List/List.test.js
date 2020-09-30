import React from 'react';
import { shallow, mount } from "enzyme";
import List from './List';


describe('List tests', () => {

	it('renders list-items', () => {
		const records = [
			{ number: "10", toSwitch: false, gamesReportWin: 3 }
		];
		const wrapper = shallow(<List records={records} />);
		// Expect the wrapper object to be defined
		expect(wrapper.find('Table')).toBeDefined();
		expect(wrapper.find('.record-item')).toHaveLength(records.length);
	});

	it('renders a list item', () => {
		const records = [
			{ number: 10, toSwitch: false, gamesReportWin: 3 }
		];
		const wrapper = mount(<List records={records} />);

		// Check if an element in the Component exists
		expect(wrapper.contains([
				<th scope="row">{0}</th>,
				<td>{10}</td>,
				<td>{'No'}</td>,
				<td>{3}</td>,
		])).toBeTruthy();
	});
});
