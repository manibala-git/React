import React, { useEffect, useState } from 'react'
import './App.css'
// Images
import cloudIcon from './assets/clouds.svg'
import waterIcon from './assets/water.svg'
import rainIcon from './assets/cloud-rain.svg'
import snowIcon from './assets/snow.svg'
import drizzleIcon from './assets/cloud-drizzle.svg'
import clearIcon from './assets/brightness-high.svg'
import windIcon from './assets/wind.svg'
import searchIcon from './assets/search.svg'
const WeatherDetails = ({ icon, temp, city, country, lat, log,humidity,wind }) => {
    return (
        <>
            <div className="image">
                <img src={icon} className='images' alt="Image" />
            </div>
            <div className="temp">{temp}℃</div>
            <div className="location">{city}</div>
            <div className="country">{country}</div>
            <div className="cord">
                <div className="lat">latitute
                    <span>{lat}</span>
                </div>
                <div className="log">longitude
                    <span>{log}</span>
                </div>
            </div>
            <div className="data-container">
                <div className="elemet"><img src={waterIcon} alt="humidity" className='waterIcon' />
                <div className="data">
                    <div className="water-per">{humidity} %</div>
                    <div className="data-text">Humidity</div>
                </div>
                </div>
                <div className="elemet"><img src={windIcon} alt="humidity" className='windIcon' />
                <div className="data">
                    <div className="wind-per">{wind} km/h</div>
                    <div className="data-text">Wind Speed</div>
                </div>
                </div>
            </div>
        </>
    );
};
export const App = () => {
    const [text,setText] = useState("Coimbatore")
    const [icon, setIcon] = useState(clearIcon)
    const [temp, setTemp] = useState(0)
    const [city, setCity] = useState("Coimbatore")
    const [country, setCountry] = useState("IN")
    const [lat, setLat] = useState(0)
    const [log, setLog] = useState(0)
    const [humidity,setHumidity] = useState(0)
    const [wind,setWind] = useState(0)
    const [cityNotFound,setCityNotFound] = useState(false)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const weatherIcon={
        "01d":clearIcon,
        "01n":clearIcon,
        "02d":cloudIcon,
        "02n":cloudIcon,
        "03d":drizzleIcon,
        "03n":drizzleIcon,
        "04d":drizzleIcon,
        "04n":drizzleIcon,
        "09d":rainIcon,
        "09n":rainIcon,
        "10d":rainIcon,
        "10n":rainIcon,
        "13d":snowIcon,
        "13n":snowIcon,
    }

    const search = async()=>{
        setLoading(true)
        
        let api_key = "9e393edf0ed5450502dea51b326dac0d"
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;
        try {
            let res = await fetch(url);
            let data = await res.json();
            if(data.cod==="404"){
                console.error("City Not Found");
                setCityNotFound(true);
                setLoading(false);
                setError(null)
            }
            setHumidity(data.main.humidity);
            setWind(data.wind.speed);
            setTemp(Math.floor(data.main.temp));
            setCity(data.name);
            setCountry(data.sys.country);
            setLat(data.coord.lat);
            setLog(data.coord.lon);
            const weatherIconCode = data.weather[0].icon;
            setIcon(weatherIcon[weatherIconCode]||clearIcon);
            setCityNotFound(false);
        } catch (error) {
            console.error("An error occured: ", error.message);
            setError("Error Occur");
            ret
        }finally{
            setLoading(false)
        }
    }
const searchEvent = (e)=>{
    setText(e.target.value);
};

const handleKeyDown=(e)=>{
    if(e.key==="Enter"){
        search();
    }
}

useEffect(function(){
    search();
},[])

    return (
        <>
            <div className="container">
                <div className="input-container">
                    <input type="text" name="cityInput" id="cityInput" onChange={searchEvent} value={text} onKeyDown={handleKeyDown} placeholder='Search City' className='cityInput' />
                    <div className="search-icon">
                        <img src={searchIcon} alt="Search" onClick={()=>search()} />
                    </div>
                </div>                
                {loading&&<div className="load-msg">Loading...</div>}
                {error && <div className="error-msg">{error}</div>}
               {cityNotFound&& <div className="city-msg">City Not Found</div>}
             {!loading && !cityNotFound &&  <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind}/>}

                <p className='copyright'>Designed by <span>Mani</span> </p>
            </div>
        </>
    )
}

