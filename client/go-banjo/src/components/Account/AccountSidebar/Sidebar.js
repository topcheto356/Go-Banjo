import React, { Fragment } from 'react';
import { SidebarUser } from './SidebarUser';
import { SidebarAdmin } from './SidebarAdmin';
import SubMenu from './SubMenu';

const Sidebar = (props) => {
	const user = props.user;
	return (
		<nav className={props.className}>
			{SidebarUser.map((items, index) => {
				return <SubMenu item={items} key={index} className={props.className} />;
			})}
			{user.role === 'admin' && (
				<Fragment>
					<p className={`${props.className}-title`}>Admin</p>
					{SidebarAdmin.map((items, index) => {
						return (
							<SubMenu item={items} key={index} className={props.className} />
						);
					})}
				</Fragment>
			)}
		</nav>
	);
};

export default Sidebar;
