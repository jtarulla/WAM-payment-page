import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';
import { Header } from '../components/layout/Header';
import PaymentProcess from '../components/PaymentProcess';
import Footer from '../components/layout/Footer';

it('renders App without errors', () => {
	const wrapper = shallow(<App />);

	const header = wrapper.find(Header);
	expect(header.exists()).toBe(true);

	const paymentProcess = wrapper.find(PaymentProcess);
	expect(paymentProcess.exists()).toBe(true);

	const footer = wrapper.find(Footer);
	expect(footer.exists()).toBe(true);
});
