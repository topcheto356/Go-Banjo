import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import AccountSection from './AccountSection';
import Sidebar from './AccountSidebar/Sidebar';

const Account = () => {
	const [component, setComponent] = useState('AccountMain');

	const user = useSelector((state) => state.auth.user);
	if (!user) return null;

	// let component = <AccountSettings className='account-section-settings' />;

	const loadComponent = (comp) => {
		setComponent(comp);
	};

	return (
		<main className='account'>
			<Sidebar
				className='account-nav'
				user={user}
				loadComponent={loadComponent}
			/>
			<AccountSection
				className='account-section'
				user={user}
				component={component}
			/>
		</main>
	);
};

export default Account;
