import React from "react";
import { mount } from "enzyme";
import { act } from 'react-dom/test-utils';
import UserInput from "./UserInput";

describe("check user input form", () => {

	let wrapper = mount(<UserInput/>);

	it('should render one Form', () => {
		expect(wrapper.find('Form')).toHaveLength(1);
	});

	it('should have a number field', () => {
		expect(wrapper.find('input[type="number"]').length).toEqual(1);
	});
	it('should have a checkbox field', () => {
		expect(wrapper.find('input[type="checkbox"]').length).toEqual(1);
	});

	it('should have a submit button', () => {
		expect(wrapper.find('button').length).toEqual(1);
	});

	it('should set the number value on change event', async () => {
		await act(async () => {
			 wrapper.find('input[type="number"]').simulate('change', {
				target: {
					name:'number',
					value: 1,
				},
			});
		});
		wrapper.update();
		expect(wrapper.find('input[type="number"]').prop('value')).toEqual(1);
	});
	it('should set the isSwitch value on change event', async () => {
		await act(async () => {
			 wrapper.find('input[type="checkbox"]').simulate('change', {
				target: {
					name:'isSwitch',
					value: true,
				},
			});
		});
		wrapper.update();
		expect(wrapper.find('input[type="checkbox"]').prop('checked')).toBeTruthy();
	});
})
