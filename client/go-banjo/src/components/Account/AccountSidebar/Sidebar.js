import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const Sidebar = (props) => {
	return (
		<nav className={props.className}>
			{SidebarData.map((items, index) => {
				return <SubMenu item={items} key={index} className={props.className} />;
			})}
		</nav>
	);
};

export default Sidebar;
