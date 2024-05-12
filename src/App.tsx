import React from 'react';
import logo from './logo.svg';
import './App.css';
import FurnitureWrapper from './components/furnitureWrapper';
import furnitureJson from './data/furniture.json'

function App() {
	return (
		<div className="App">
			<div className='header'>
				<h1>Júlíus Big Furniture Store</h1>
			</div>
			<FurnitureWrapper/>
		</div>
	);
}

export default App;
