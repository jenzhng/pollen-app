import React from 'react';
import './styles.css';
//import 'semantic-ui-css/semantic.min.css';
//import { Card } from 'semantic-ui-react';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
const iconPath = process.env.PUBLIC_URL + '/assets/color/';
const pollenCount = ["None", "Very Low", "Low", "Medium", "High", "Very High"];

//button to refresh data from API, makes another call to API
const refresh = () => {
  window.location.reload();
}

//component for displaying Pollen Count data retrieved from API 
const WeatherCard = ({weatherData}) => (
   <div className="main">
	   <div className="top">	
        <p className="header"> Pollen Forecast </p>
		<Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div> 
	  
	  <div class="break"></div>
	  
		<div className="item">
		<p className="temp">{moment(weatherData.data.timelines[0].intervals[0].startTime).format("ddd")}</p>	
		<p className="temp">Weed: {pollenCount[weatherData.data.timelines[0].intervals[0].values.weedIndex]}</p>
		<p className="temp">Tree: {pollenCount[weatherData.data.timelines[0].intervals[0].values.treeIndex]}</p>
		<p className="temp">Grass: {pollenCount[weatherData.data.timelines[0].intervals[0].values.grassIndex]}</p>
		</div>
		
		<div className="item-wide">
		<p className="temp">{moment(weatherData.data.timelines[0].intervals[1].startTime).format("ddd")}</p>
		<p className="temp">Weed: {pollenCount[weatherData.data.timelines[0].intervals[1].values.weedIndex]}</p>
		<p className="temp">Tree: {pollenCount[weatherData.data.timelines[0].intervals[1].values.treeIndex]}</p>
		<p className="temp">Grass: {pollenCount[weatherData.data.timelines[0].intervals[1].values.grassIndex]}</p>
		</div>
		<div className="item">
		
		<p className="temp">{moment(weatherData.data.timelines[0].intervals[2].startTime).format("ddd")}</p>
		<p className="temp">Weed: {pollenCount[weatherData.data.timelines[0].intervals[2].values.weedIndex]}</p>
		<p className="temp">Tree: {pollenCount[weatherData.data.timelines[0].intervals[2].values.treeIndex]}</p>
		<p className="temp">Grass: {pollenCount[weatherData.data.timelines[0].intervals[2].values.grassIndex]}</p>
		</div>
		
		<div className="item-wide">
		<p className="temp">{moment(weatherData.data.timelines[0].intervals[3].startTime).format("ddd")}</p>
		<p className="temp">Weed: {pollenCount[weatherData.data.timelines[0].intervals[3].values.weedIndex]}</p>
		<p className="temp">Tree: {pollenCount[weatherData.data.timelines[0].intervals[3].values.treeIndex]}</p>
		<p className="temp">Grass: {pollenCount[weatherData.data.timelines[0].intervals[3].values.grassIndex]}</p>
		</div>
		
		<div className="item">
		<p className="temp">{moment(weatherData.data.timelines[0].intervals[4].startTime).format("ddd")}</p>
		<p className="temp">Weed: {pollenCount[weatherData.data.timelines[0].intervals[4].values.weedIndex]}</p>
		<p className="temp">Tree: {pollenCount[weatherData.data.timelines[0].intervals[4].values.treeIndex]}</p>
		<p className="temp">Grass: {pollenCount[weatherData.data.timelines[0].intervals[4].values.grassIndex]}</p>
		</div>
        
		<div className="item-wide">
		<p className="temp">{moment(weatherData.data.timelines[0].intervals[5].startTime).format("ddd")}</p>
		<p className="temp">Weed: {pollenCount[weatherData.data.timelines[0].intervals[5].values.weedIndex]}</p>
		<p className="temp">Tree: {pollenCount[weatherData.data.timelines[0].intervals[5].values.treeIndex]}</p>
		<p className="temp">Grass: {pollenCount[weatherData.data.timelines[0].intervals[5].values.grassIndex]}</p>
		</div>
		
  </div>
)
/* <p className="temp">Temperature: &deg;F</p>
		<p className="temp">Humidity:  %</p> */

export default WeatherCard;
