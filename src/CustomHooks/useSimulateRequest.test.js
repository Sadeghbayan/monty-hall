import React from 'react';
import { render } from '@testing-library/react';
import UserInput from './UserInput';

test('renders learn react link', () => {
	const { getByText } = render(<UserInput />);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
