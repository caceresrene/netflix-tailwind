import React from 'react';

const Nav = () => {
	return (
		<nav className='flex items-center justify-between p-2'>
			<h1 className='text-2xl font-bold text-red-700'>Netflix</h1>
			<ul className='space-x-6'>
				<select
					className=' py-1 px-3 rounded bg-transparent border text-white'
					name='language'
					id='language'
				>
					<option value='English'>English</option>
					<option value='Spanish'>Spanish</option>
				</select>
				<button className='py-1 px-3 text-white rounded bg-red-500 hover:bg-red-400'>
					Sign In
				</button>
			</ul>
		</nav>
	);
};

export default Nav;
