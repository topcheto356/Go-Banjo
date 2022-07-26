import React, { Fragment } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import Register from './Register';

const Authentication = () => {
	const [register, setRegister] = useState(false);
	const isAuthenticated = useSelector((state) => state.auth.user);

	const switchHandler = (e) => {
		setRegister(!register);
	};

	return (
		<main className='auth'>
			<section className='auth-section'>
				<div className='button-wrapper'>
					<button
						className='btn-white auth-section-btn-position'
						onClick={switchHandler}
					>
						Switch To {register ? 'Login' : 'Register'}
					</button>
				</div>
				{register ? <Register /> : <Login />}
			</section>
			<section className='auth-section auth-section-img-container'></section>
		</main>
	);
};

export default Authentication;
