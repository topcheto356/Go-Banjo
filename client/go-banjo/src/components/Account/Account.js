import React from 'react';
import { useSelector } from 'react-redux';
import AccountNav from './AccountNav';

const Account = () => {
	const user = useSelector((state) => state.auth.user);
	if (!user) return null;

	return (
		<main className='account'>
			<AccountNav className='account-nav' user={user} />
		</main>
	);
};

export default Account;
