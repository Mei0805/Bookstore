import React, { useEffect, useState } from 'react';
import axios from "axios";
import './Nav.scss';

import { CloudMoonFill } from 'react-bootstrap-icons';


export default function UpdateThoiTiet() {
  let apiKey = 'f42d08abfbff024f3f111f6660291652';
  let baseUrl = `https://api.openweathermap.org/data/2.5/weather?`

  const getWeatherData = async (cityname) => {
    try {
      const { data } = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
      setWeatherData(data); console.log(data);
      return data;
    } catch (err) {
      throw err;
    }

  }
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState(null);

  const getData = async () => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => { getData(); }, [])

  return (
    <div className='resWeather'>
      <h3><CloudMoonFill /> App Thời tiết</h3>
      <form className='row'>
        <div className="mb-3 col-6">
          <input className='form-control me-3' onChange={(e) => setCity(e.target.value)} placeholder='Nhập tên thành phố ... ' />
        </div>
        <div className="mb-3 col-6">
          <button onClick={() => getData()} type='button' className='btn btn-dark'>Xem thời tiết</button>
        </div>
      </form>
      <div className='demoRes col-9'>
        {weatherdata == null ? null :
          <div id='resWeather' className='p-2'>
            <div className='location'>
              <h2 className='text-primary'>{weatherdata.name} , {weatherdata.sys.country}</h2>
            </div>
            <h5 className='text-dark'>{weatherdata.weather[0].main}</h5>
            <div className='weather-icon'>
              <img src={`https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt='imgicon' />
            </div>
            <div className='temperature'>
              <h5 className='text-light'> {parseFloat(weatherdata.main.temp - 273.15).toFixed(1)} &deg;C</h5>
            </div>

          </div>
        }
      </div>
    </div>
  );
}