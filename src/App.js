//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import { Dimmer, Loader } from 'semantic-ui-react';
require('dotenv').config();


export default function App() {
	
	
	const [lat, setLat] = useState([]);
	const [long, setLong] = useState([]);
	const [data, setData] = useState([]);
	
	//Retrieve JSON data from API based on coordinates
	useEffect(() => {
		const fetchData = async () => {
			navigator.geolocation.getCurrentPosition(function(position) {
				setLat(position.coords.latitude);
				setLong(position.coords.longitude);
			});
		
			console.log("Latitude is:", lat)
			console.log("Longitude is:", long)
		
 		await fetch(`${process.env.REACT_APP_API_URL}?location=${lat},${long}&timesteps=1d&units=imperial&apikey=${process.env.REACT_APP_API_KEY}&fields=treeIndex,weedIndex,grassIndex`)
		 .then(res => res.json())
		 .then(result => {
			setData(result)
			console.log(result);
		}); 
		}
	fetchData();
	
	}, [lat, long]);
	
	return (
		
		<div className="App">
			{(typeof data.data != 'undefined') ? (
				<Weather weatherData={data}/>
			): (
				<div>
					<Dimmer active>
						<Loader>Loading..</Loader>
					</Dimmer>
				
				</div>
			)}
     
		</div>
	);
}


