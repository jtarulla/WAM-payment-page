import { shallow, mount } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Payment from '../components/Payment';

describe('Payment component', () => {
	const props = {
		nextStep: jest.fn(),
		prevStep: jest.fn()
	};

	it('renders without error given the required props', () => {
		const wrapper = shallow(<Payment {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should call nextStep prop when clicking [.btn-continue]', () => {
		const wrapper = mount(<Payment {...props} />);
		const button = wrapper.find('.btn-continue');
		button.simulate('click', {
			preventDefault: () => {}
		});
		const callback = props.nextStep.mock.calls.length;
		expect(callback).toBe(1);
		expect(props.nextStep).toHaveBeenCalled();
	});

	it('should call prevStep prop when clicking [.btn-back]', () => {
		const wrapper = mount(<Payment {...props} />);
		const button = wrapper.find('.btn-back');
		button.simulate('click', {
			preventDefault: () => {}
		});
		const callback = props.prevStep.mock.calls.length;
		expect(callback).toBe(1);
		expect(props.prevStep).toHaveBeenCalled();
	});
});
