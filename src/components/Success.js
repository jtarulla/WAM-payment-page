import React, { Component } from 'react';
import page from '../assets/page-3.png';
import success from '../assets/success.png';
import loading from '../assets/loading.gif';

export class Payment extends Component {
	state = {
		loading: true,
		message: null
	};

	async componentDidMount() {
		const url = 'http://www.mocky.io/v2/5e3d41272d00003f7ed95c09';
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ message: data, loading: false });
	}

	render() {
		const { message } = this.state;

		if (this.state.loading) {
		}

		return (
			<>
				<div className='page-number'>
					<img src={page} alt='page-number' />
				</div>
				<div className='container'>
					{this.state.loading ? (
						<div className='loading'>
							<img src={loading} alt='loading' />
						</div>
					) : (
						<div className='success'>
							<img src={success} alt='success' />
							<h2>{message.title}</h2>
							<p> {message.text} </p>
						</div>
					)}
				</div>
			</>
		);
	}
}

export default Payment;
