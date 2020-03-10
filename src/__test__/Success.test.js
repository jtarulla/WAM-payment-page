import { shallow, mount } from 'enzyme';
import React from 'react';
import Success from '../components/Success';

describe('Success Component', () => {
	it('renders Success component without errors', () => {
		expect(shallow(<Success />)).toMatchSnapshot();
	});

	it('componentDidMount has been called', () => {
		jest.spyOn(Success.prototype, 'componentDidMount');
		const wrapper = mount(<Success />);
		expect(Success.prototype.componentDidMount.mock.calls.length).toBe(1);
	});

	it('allows us to set props', () => {
		const wrapper = mount(<Success loading={false} />);
		expect(wrapper.props().loading).toEqual(false);
		wrapper.setProps({ loading: true });
		expect(wrapper.props().loading).toEqual(true);
	});
});
