import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city={'Mexico, MX'}/>
        <WeatherLocation city={'Bogotá, Col'}/>
        <WeatherLocation city={'Monterrey, MX'}/>
    </div>
);

export default LocationList;