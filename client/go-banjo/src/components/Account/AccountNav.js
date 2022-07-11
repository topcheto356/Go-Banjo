import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AccountNav = (props) => {
	const user = props.user;

	return (
		<div className={props.className}>
			<ul className={`${props.className}__links`}>
				<li className={`${props.className}__item`}>
					<Link to={'/me'} className={`${props.className}__link`}>
						yooo me-icona Settings
					</Link>
				</li>
				<li className={`${props.className}__item`}>
					<Link to={'/me'} className={`${props.className}__link`}>
						yooo me-icona my bookings
					</Link>
				</li>
				<li className={`${props.className}__item`}>
					<Link to={'/me'} className={`${props.className}__link`}>
						yooo me-icona My rewies
					</Link>
				</li>
				<li className={`${props.className}__item`}>
					<Link to={'/me'} className={`${props.className}__link`}>
						yooo me-icona Billing
					</Link>
				</li>
			</ul>
			{user.role === 'user' ? (
				<Fragment>
					<p className={`${props.className}__title`}>Admin</p>
					<ul className={`${props.className}__links`}>
						<li className={`${props.className}__item`}>
							<Link to={'/me'} className={`${props.className}__link`}>
								yooo me-icona Manage houses
							</Link>
						</li>
						<li className={`${props.className}__item`}>
							<Link to={'/me'} className={`${props.className}__link`}>
								yooo me-icona Manage users
							</Link>
						</li>
						<li className={`${props.className}__item`}>
							<Link to={'/me'} className={`${props.className}__link`}>
								yooo me-icona Manage revies
							</Link>
						</li>
						<li className={`${props.className}__item`}>
							<Link to={'/me'} className={`${props.className}__link`}>
								yooo me-icona Manage bookings
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
