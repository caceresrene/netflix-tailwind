import EnjoyTV from './components/EnjoyTV';
import Landing from './components/Landing';
import Nav from './components/Nav';

function App() {
	return (
		<>
			<div className='max-w-3xl lg:max-w-5xl mx-auto'>
				<Nav />
				<Landing />
			</div>
			<EnjoyTV />
		</>
	);
}

export default App;
