import React from 'react';
import { Link } from 'react-router-dom';

const AccountNav = (props) => {
	const user = props.user;

	return (
		<div className={props.className}>
			<ul>
				<li>
					<Link to={'/me'} className='nav__link'>
						yooo me-icona Settings
					</Link>
				</li>
				<li>
					<Link to={'/me'} className='nav__link'>
						yooo me-icona my bookings
					</Link>
				</li>
				<li>
					<Link to={'/me'} className='nav__link'>
						yooo me-icona My rewies
					</Link>
				</li>
				<li>
					<Link to={'/me'} className='nav__link'>
						yooo me-icona Billing
					</Link>
				</li>
			</ul>
			{user.role === 'admin' ? (
				<ul>
					<li>
						<Link to={'/me'} className='nav__link'>
							yooo me-icona Manage houses
						</Link>
					</li>
					<li>
						<Link to={'/me'} className='nav__link'>
							yooo me-icona Manage users
						</Link>
					</li>
					<li>
						<Link to={'/me'} className='nav__link'>
							yooo me-icona Manage revies
						</Link>
					</li>
					<li>
						<Link to={'/me'} className='nav__link'>
							yooo me-icona Manage bookings
						</Link>
					</li>
				</ul>
			) : (
				''
			)}
		</div>
	);
};

export default AccountNav;
