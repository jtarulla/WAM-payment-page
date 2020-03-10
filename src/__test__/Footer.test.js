import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../components/layout/Footer';

it('render Footer component', () => {
	expect(shallow(<Footer />)).toMatchSnapshot();
});
