import React, { Component } from 'react';
import page from '../assets/page-2.png';
import card from '../assets/card.png';
import cardsNet from '../assets/card_networks.png';
import payButton from '../assets/buttons/btn-pay.png';
import backButton from '../assets/buttons/btn-back.png';

export class Payment extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		return (
			<>
				<div className='page-number'>
					<img src={page} alt='page-number' />
				</div>
				<div className='container'>
					<h2>Pago del producto</h2>
					<p>
						Una vez efectuado el pago del producto, recibirás un email con los
						detalles de la compra.
					</p>
					<div className='card-area'>
						<div className='card'>
							<img src={card} alt='card-networks' />
						</div>
						<h3>Tarjeta de crédito</h3>
						<p>
							Se redirigirá a una plataforma de pago. Se trata de un proceso
							seguro. Puede que la validación del pago tarde 24 horas en
							completarse.
						</p>
						<div className='card-net'>
							<img src={cardsNet} alt='card-networks' />
						</div>
					</div>
					<div className='btn-back' onClick={this.back}>
						<img src={backButton} alt='back-button' />
					</div>
					<div className='btn-continue' onClick={this.continue}>
						<img src={payButton} alt='pay-button' />
					</div>
				</div>
			</>
		);
	}
}

export default Payment;
