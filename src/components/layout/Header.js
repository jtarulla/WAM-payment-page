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

			<div class='navbar'>
				<div className='navbar-list'>
					<ul>
						<li className='navbar-item'>
							<a class='item-name-help' href='#help'>
								<img src={help} alt='help' />
								ayuda
							</a>
						</li>

						<li className='navbar-item'>
							<a class='item-name-signin' href='#signin'>
								<img class='item-name-signin-img' src={signin} alt='signin' />
								sign in
							</a>
						</li>

						<li className='navbar-item with-submenu'>
							<a class='item-name-es' href='#es'>
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
