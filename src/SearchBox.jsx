import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "8506b0ec05d52b2f548e8ed9148a95ce";

    let getWeatherInfo = async () =>{
        try{

            let Response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await Response.json();
            console.log(jsonResponse);
            let result = {
                name: jsonResponse.name,
                temp: jsonResponse.main.temp,
                humidity: jsonResponse.main.humidity,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.humidity,
                feelsLike: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch (err){
          throw err;
        }
    };
    let handleChange = (evt) =>{
        setCity(evt.target.value);
    };
    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);

        }catch(err){
          setErr(true);
        }
    }
    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
              <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
              <br /><br />
              <Button variant="contained" endIcon={<SendIcon />} type='submit' >Search</Button>
              {err && <p style={{background:"red", color: 'wheat'}}>No such place exists!</p>}
            </form>
        </div>
    )
}