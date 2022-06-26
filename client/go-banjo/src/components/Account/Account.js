import React from 'react';
import { useSelector } from 'react-redux';

const Account = () => {
	const user = useSelector((state) => state.auth.user);
	if (!user) return null;
	console.log(user);

	return (
		<div>
			<img
				src={`/users/${user.photo}`}
				alt='kura mi qnko'
				className='house-card-img'
			/>
		</div>
	);
};

export default Account;
