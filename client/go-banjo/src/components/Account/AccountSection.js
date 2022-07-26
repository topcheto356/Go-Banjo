import React from 'react';

import AccountMain from './AccountUser/AccountMain';
import AccountSettingsPassword from './AccountUser/AccountSettingsPassword';
import AccountSettingsEmail from './AccountUser/AccountSettingsEmail';
import AccountSettingsInfo from './AccountUser/AccountSettingsInfo';
import AccountReviews from './AccountUser/AccountReviews';
import AccountBookings from './AccountUser/AccountBookings';

const AccountSection = (props) => {
	switch (props.component) {
		case 'AccountMain':
			return (
				<AccountMain
					user={props.user}
					className={`${props.className} ${props.className}-main`}
				/>
			);
			break;

		case 'AccountSettingsInfo':
			return (
				<AccountSettingsInfo
					className={`${props.className} ${props.className}-settings`}
				/>
			);
			break;

		case 'AccountSettingsPassword':
			return (
				<AccountSettingsPassword
					className={`${props.className} ${props.className}-settings`}
				/>
			);
			break;

		case 'AccountSettingsEmail':
			return (
				<AccountSettingsEmail
					className={`${props.className} ${props.className}-settings`}
				/>
			);
			break;

		case 'AccountReviews':
			return <AccountReviews />;
			break;

		case 'AccountBookings':
			return <AccountBookings />;
			break;

		default:
			return <AccountMain />;
			break;
	}
};

export default AccountSection;
