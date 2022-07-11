import React from 'react';
import { useSelector } from 'react-redux';

import AccountNav from './AccountNav';
import AccountSettings from './AccountSettings';

const Account = () => {
	const user = useSelector((state) => state.auth.user);
	if (!user) return null;

	return (
		<main className='account'>
			<AccountNav className='account-nav' user={user} />
			<div className='account-section'>
				<AccountSettings className='account-section-settings' user={user} />
			</div>
		</main>
	);
};

export default Account;
