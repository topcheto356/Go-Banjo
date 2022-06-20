import React from 'react';import Icons from '../Icons';

const FollowUsOn = (props) => {
	return (
		<div className={props.className}>
			<p className="section__title">FollowUsOn</p>
			<Icons name="map-pin" color="white" size={100} />
			<p>Address:</p>
			<p>blablablablabla</p>
		</div>
	);
};

export default FollowUsOn;
