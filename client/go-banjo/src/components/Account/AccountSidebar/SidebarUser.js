import React from 'react';

export const SidebarUser = [
	{
		title: 'my account (Not added)',
		component: '/me',
		icon: 'yoo',
	},
	{
		title: 'settings (Not added)',
		component: '/me',
		icon: 'yoo',
		// icon:<AiIcons.AiFillHome/>
		iconClose: 'closed',
		// iconClose:<RiIcons.RiArrowDownSFill/>
		iconOpen: 'opened',
		// iconOpen:<RiIcons.RiArrowUpSFill/>
		subNav: [
			{
				title: 'change information',
				component: '/me',
				icon: 'yoo',
			},
			{
				title: 'change password',
				component: '/me',
				icon: 'yoo',
			},
			{
				title: 'change email',
				component: '/me',
				icon: 'yoo',
			},
		],
	},
	{
		title: 'My reviews (Not added)',
		component: '/me',
		icon: 'yoo',
	},
	{
		title: 'My bookings (Not added)',
		component: '/me',
		icon: 'yoo',
	},
];
