import React from 'react';
import { useSelector } from 'react-redux';

const Account = () => {
	const user = useSelector((state) => state.auth.user);
	if (!user) return null;
	console.log(user);

	return (
		<div>
			<img src={user.photo} alt='user-photo' className='house-card-img' />
		</div>
	);
};

export default Account;
