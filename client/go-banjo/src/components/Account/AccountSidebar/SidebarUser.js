import React from 'react';

export const SidebarUser = [
	{
		title: 'my account (Not added)',
		component: 'AccountMain',
		icon: 'yoo',
	},
	{
		title: 'settings (Not added)',
		icon: 'yoo',
		// icon:<AiIcons.AiFillHome/>
		iconClose: 'closed',
		// iconClose:<RiIcons.RiArrowDownSFill/>
		iconOpen: 'opened',
		// iconOpen:<RiIcons.RiArrowUpSFill/>
		subNav: [
			{
				title: 'change information',
				component: 'AccountSettingsInfo',
				icon: 'yoo',
			},
			{
				title: 'change password',
				component: 'AccountSettingsPassword',
				icon: 'yoo',
			},
			{
				title: 'change email',
				component: 'AccountSettingsEmail',
				icon: 'yoo',
			},
		],
	},
	{
		title: 'My reviews (Not added)',
		component: 'AccountReviews',
		icon: 'yoo',
	},
	{
		title: 'My bookings (Not added)',
		component: 'AccountBookings',
		icon: 'yoo',
	},
];
