import React from 'react';

const EnjoyTV = () => {
	return (
		<section className='bg-black border-y-[0.5rem] border-gray-700'>
			<main className='grid grid-cols-2 max-w-3xl mx-auto'>
				<div className='py-32'>
					<h2 className='text-4xl font-bold mb-2'>Enjoy on your TV.</h2>
					<p>
						Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
						players, and more.
					</p>
				</div>
				<img
					src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
					alt=''
				/>
			</main>
		</section>
	);
};

export default EnjoyTV;
