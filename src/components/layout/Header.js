import React from 'react';
import logo from '../../assets/logo.jpg';
import help from '../../assets/navbar-icons/help.png';
import signin from '../../assets/navbar-icons/signin.png';
import arrow from '../../assets/navbar-icons/arrow.png';

export const Header = () => {
	return (
		<header className='header' data-testid='header'>
			<div className='logo'>
				<a
					href='https://www.wearemarketing.com/es/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src={logo} alt='WAM' />
				</a>
			</div>

			<div className='navbar'>
				<div className='navbar-list'>
					<ul>
						<li className='navbar-item'>
							<a className='item-name-help' href='#help'>
								<img src={help} alt='help' />
								<span>ayuda</span>
							</a>
						</li>

						<li className='navbar-item'>
							<a className='item-name-signin' href='#signin'>
								<img
									className='item-name-signin-img'
									src={signin}
									alt='signin'
								/>
								<span>sign in</span>
							</a>
						</li>

						<li className='navbar-item'>
							<a className='item-name-es' href='#es'>
								es
								<img src={arrow} alt='arrow' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};
