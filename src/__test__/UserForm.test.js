import { mount } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import UserForm from '../components/UserForm';

describe('UserForm component', () => {
	const props = {
		nextStep: jest.fn(),
		handleChange: jest.fn(),
		values: {
			firstName: 'First',
			lastName: 'Last'
		}
	};
	it('renders without error given the required props', () => {
		const wrapper = mount(<UserForm {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should call nextStep prop when clicking [.btn-continue]', () => {
		const wrapper = mount(<UserForm {...props} />);
		const button = wrapper.find('.btn-continue');
		button.simulate('click', {
			preventDefault: () => {}
		});
		const callback = props.nextStep.mock.calls.length;
		expect(callback).toBe(1);
	});

	it('should call handleChange prop when changing first name input', () => {
		const wrapper = mount(<UserForm {...props} />);
		const input = wrapper.find('input#firstName');
		input.simulate('change', { target: { id: 'firstName', value: 'John' } });
		expect(props.handleChange).toHaveBeenCalled();
	});

	it('should call handleChange prop when changing last name input', () => {
		const wrapper = mount(<UserForm {...props} />);
		const input = wrapper.find('input#lastName');
		input.simulate('change', { target: { id: 'lastName', value: 'Doe' } });
		expect(props.handleChange).toHaveBeenCalled();
	});
});
