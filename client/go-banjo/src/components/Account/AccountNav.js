import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AccountNav = (props) => {
	const user = props.user;

	return (
		<div className={props.className}>
			<ul className={`${props.className}__links`}>
				<li className={`${props.className}__item`}>
					<Link to={'/me'} className={`${props.className}__link`}>
						oi My account
					</Link>
				</li>
				<li className={`${props.className}__item`}>
					<Link to={'/me'} className={`${props.className}__link`}>
						oi Settings
					</Link>
				</li>
				<li className={`${props.className}__item`}>
					<Link to={'/me'} className={`${props.className}__link`}>
						oi my bookings
					</Link>
				</li>
				<li className={`${props.className}__item`}>
					<Link to={'/me'} className={`${props.className}__link`}>
						oi My rewies
					</Link>
				</li>
				<li className={`${props.className}__item`}>
					<Link to={'/me'} className={`${props.className}__link`}>
						oi Billing
					</Link>
				</li>
			</ul>
			{user.role === 'user' ? (
				<Fragment>
					<p className={`${props.className}__title`}>Admin</p>
					<ul className={`${props.className}__links`}>
						<li className={`${props.className}__item`}>
							<Link to={'/me'} className={`${props.className}__link`}>
								oi Manage houses
							</Link>
						</li>
						<li className={`${props.className}__item`}>
							<Link to={'/me'} className={`${props.className}__link`}>
								oi Manage users
							</Link>
						</li>
						<li className={`${props.className}__item`}>
							<Link to={'/me'} className={`${props.className}__link`}>
								oi Manage rewies
							</Link>
						</li>
						<li className={`${props.className}__item`}>
							<Link to={'/me'} className={`${props.className}__link`}>
								oi Manage bookings
							</Link>
						</li>
					</ul>
				</Fragment>
			) : (
				''
			)}
		</div>
	);
};

export default AccountNav;
