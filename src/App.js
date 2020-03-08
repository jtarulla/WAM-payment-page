import React from 'react';
import './scss/main.scss';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PaymentProcess } from './components/PaymentProcess';

export const App = () => {
	return (
		<>
			<Header />
			<PaymentProcess />
			<Footer />
		</>
	);
};
