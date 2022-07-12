import React, { Fragment, useState } from 'react';

const SubMenu = (props) => {
	const [subnav, setSubnav] = useState(false);
	const showSubnav = () => setSubnav(!subnav);
	const item = props.item;

	const onClickNavHandler = () => {
		if (item.subNav) showSubnav();
		else props.loadComponent(item.component);
	};

	return (
		<Fragment>
			<div className={`${props.className}-item`} onClick={onClickNavHandler}>
				<div className={`${props.className}-item__icon`}>{item.icon}</div>

				<div className={`${props.className}-item__label`}>{item.title}</div>

				<div className={`${props.className}-item__icon`}>
					{item.subNav && subnav
						? item.iconOpen
						: item.subNav
						? item.iconClose
						: null}
				</div>
			</div>
			{subnav &&
				item.subNav.map((item, index) => {
					const onClickSubNavHandler = () => {
						props.loadComponent(item.component);
					};
					return (
						<div
							className={`${props.className}-item__dropdown`}
							key={index}
							onClick={onClickSubNavHandler}
						>
							<div className={`${props.className}-item__icon`}>{item.icon}</div>

							<div className={`${props.className}-item__label`}>
								{item.title}
							</div>
						</div>
					);
				})}
		</Fragment>
	);
};

export default SubMenu;
