import React from 'react';
import logo from '../../assets/logo.jpg';

const Footer = () => {
	return (
		<footer className='footer'>
			<>
				<div className='copyright'>2020 &copy; We Are Marketing</div>

				<div className='logo'>
					<a
						href='https://www.wearemarketing.com/es/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={logo} alt='WAM' />
					</a>
				</div>
			</>
		</footer>
	);
};

export default Footer;
