import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
	const user = useSelector((state) => state.auth.user);

	if (!user) {
		return <Redirect to='/auth' />;
	}

	return (
		<Route
			{...rest}
			render={() => (user.isAuthenticated ? children : <Redirect to='/auth' />)}
		/>
	);
};

export default PrivateRoute;
