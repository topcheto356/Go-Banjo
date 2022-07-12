import React from 'react';
import { useSelector } from 'react-redux';

import Sidebar from './AccountSidebar/Sidebar';
import AccountSettings from './AccountSettings';

const Account = () => {
	const user = useSelector((state) => state.auth.user);
	if (!user) return null;

	return (
		<main className='account'>
			<Sidebar className='account-nav' user={user} />
			<div className='account-section'>
				<AccountSettings className='account-section-settings' />
			</div>
		</main>
	);
};

export default Account;
