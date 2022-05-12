import React from 'react';

const Landing = () => {
	return (
		<div className='text-center my-48'>
			<h2 className='text-6xl font-bold'>Unlimited movies, TV shows, and more.</h2>
			<p className='text-xl my-4'>Watch anywhere. Cancel anytime.</p>
			<p>Ready to watch? Enter your email to create or restart your membership.</p>
			<div className='my-4'>
				<input className='p-3 w-[28rem]' type='text' placeholder='email address' />
				<button className='p-3 bg-red-500'>Get Started</button>
			</div>
		</div>
	);
};

export default Landing;
