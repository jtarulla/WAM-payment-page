import React, { Component } from 'react';
import UserForm from './UserForm';
import Payment from './Payment';
import Success from './Success';

export class PaymentProcess extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			firstName: '',
			lastName: ''
		};
		this.nextStep = this.nextStep.bind(this);
		this.prevStep = this.prevStep.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	// Proceed to next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	};

	// Go back to prev step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	};

	// Handle fields change
	handleChange = input => e => {
		this.setState({ [input]: e.target.value });
	};

	render() {
		const { step } = this.state;
		const { firstName, lastName } = this.state;
		const values = { firstName, lastName };

		switch (step) {
			case 1:
				return (
					<UserForm
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 2:
				return <Payment nextStep={this.nextStep} prevStep={this.prevStep} />;
			case 3:
				return <Success />;

			default:
				return (
					<UserForm
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
		}
	}
}

export default PaymentProcess;
