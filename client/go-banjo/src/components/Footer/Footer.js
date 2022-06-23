import React from 'react';
import AboutUs from './AboutUs';
import FollowUsOn from './FollowUsOn';

const Footer = () => {
	return (
		<footer className='footer'>
			<main className='footer__main'>
				<div className='footer__main__section'>
					<img alt='icons' />
				</div>
				<AboutUs className='footer__main__section' />
				<FollowUsOn className='footer__main__section' />
				<div className='footer__main__section'>Contact us</div>
			</main>
			<main className='footer__main'>
				<p className='footer__main__bottom'>&copy; All rights reserved</p>
			</main>
		</footer>
	);
};

export default Footer;
