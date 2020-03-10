import { shallow } from 'enzyme';
import React from 'react';
import Header from '../components/layout/Header';

describe('Header component', () => {
	it('renders Header component', () => {
		expect(shallow(<Header />)).toMatchSnapshot();
	});
});
