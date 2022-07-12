import React, { useState } from 'react';

import AccountMain from './AccountUser/AccountMain';
import AccountSettingsPassword from './AccountUser/AccountSettingsPassword';
import AccountSettingsEmail from './AccountUser/AccountSettingsEmail';
import AccountSettingsInfo from './AccountUser/AccountSettingsInfo';
import AccountReviews from './AccountUser/AccountReviews';
import AccountBookings from './AccountUser/AccountBookings';

const AccountSection = (props) => {
	const user = props.user;

	switch (props.component) {
		case AccountMain:
			return <AccountMain />;

		case AccountSettingsInfo:
			return <AccountSettingsInfo className={`${props.className}-settings`} />;

		case AccountSettingsPassword:
			return (
				<AccountSettingsPassword className={`${props.className}-settings`} />
			);

		case AccountSettingsEmail:
			return <AccountSettingsEmail className={`${props.className}-settings`} />;

		case AccountReviews:
			return <AccountReviews />;

		case AccountBookings:
			return <AccountBookings />;

		default:
			return <AccountMain />;
	}
};

export default AccountSection;
