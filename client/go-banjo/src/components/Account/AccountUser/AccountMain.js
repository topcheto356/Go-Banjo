import React, { Fragment } from 'react';

const AccountMain = (props) => {
	const user = props.user;
	return (
		<div className={props.className}>
			<div className={`${props.className}-img-container `}>
				<img
					className={`${props.className}-img-container__img`}
					src='/src/img/banjo.jpg'
					alt={`${user.firstName}-${user.lastName}`}
				/>
			</div>

			<p className={`${props.className}__name`}>
				{`${user.firstName} ${user.lastName}`}
			</p>

			<p className={`${props.className}__email`}>{`Email: ${user.email}`}</p>
		</div>
	);
};

export default AccountMain;
