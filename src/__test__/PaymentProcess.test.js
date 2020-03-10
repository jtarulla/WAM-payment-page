import { shallow, mount } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import PaymentProcess from '../components/PaymentProcess';
import UserForm from '../components/UserForm';
import Payment from '../components/Payment';
import Success from '../components/Success';

describe('PaymentProcess Component', () => {
	it('renders PaymentProcess component without errors', () => {
		const wrapper = shallow(<PaymentProcess />);
		expect(toJson(wrapper)).toMatchSnapshot();

		const userForm = wrapper.find(UserForm);
		expect(userForm.exists()).toBe(true);

		wrapper.setState({ step: 2 });
		const payment = wrapper.find(Payment);
		expect(payment.exists()).toBe(true);

		wrapper.setState({ step: 3 });
		const success = wrapper.find(Success);
		expect(success.exists()).toBe(true);
	});

	it('should change state when calling nextStep', () => {
		const wrapper = mount(<PaymentProcess />);
		const button = wrapper.find(UserForm);
		button.invoke('nextStep')();
		expect(wrapper.state().step).toEqual(2);
	});

	it('should change state when calling prevStep', () => {
		const wrapper = mount(<PaymentProcess />);
		wrapper.setState({ step: 2 });
		const button = wrapper.find(Payment);
		button.invoke('prevStep')();
		expect(wrapper.state().step).toEqual(1);
	});

	it('should change state when calling handleChange', () => {
		const wrapper = shallow(<PaymentProcess />);
		wrapper.setState({ firstName: 'John' });
		const input = wrapper.find(UserForm);
		input.invoke('handleChange')({
			target: { value: 'John' }
		});
		expect(wrapper.state().firstName).toEqual('John');
	});
});
