import React, { Fragment, useState } from 'react';

const SubMenu = (props) => {
	const [subnav, setSubnav] = useState(false);
	const showSubnav = () => setSubnav(!subnav);
	const item = props.item;

	return (
		<Fragment>
			<div
				className={`${props.className}-item`}
				onClick={item.subNav && showSubnav}
			>
				<div className={`${props.className}-item__icon`}>{item.icon}</div>

				<label className={`${props.className}-item__label`}>{item.title}</label>

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
					return (
						<div className={`${props.className}-item__dropdown`} key={index}>
							<div className={`${props.className}-item__icon`}>{item.icon}</div>

							<label className={`${props.className}-item__label`}>
								{item.title}
							</label>
						</div>
					);
				})}
		</Fragment>
	);
};

export default SubMenu;
