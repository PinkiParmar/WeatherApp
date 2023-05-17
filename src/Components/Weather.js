import React, { useEffect, useState } from "react";
import "./weather.css"
import DisplayWeather from "./Displayweather";
export default function Weather(){
    const [weather, setWeather] = useState();
    const [form,setForm]=useState({city:"", country:""});
    const [apiKey, setApiKey] = useState("42f2de8f0de65e85da024b33e92a438d");

    const weatherData = async (e) =>{
        e.preventDefault();
           await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${apiKey}`
          )
            .then((res) => res.json())
            .then((data) => {
                setWeather(data);   
            });
        }


                               
     const handleChange=(e) =>{
        let name=e.target.name;
        let value=e.target.value;
        if(name=="city"){
            setForm({...form,city:value});
        }
        if(name=="country"){
            setForm({...form,country:value});
        }
        console.log(form.city,form.country)
     } 
                                  
    return(<>
    <div className="weather">
        <span className="title">Weather App</span>
        <br/>
        <form onSubmit={(e)=>weatherData(e)}>
            <input type="text" name="city" placeholder="city" onChange={e=>handleChange(e)}/>
            <input type="text" name="country" placeholder="country" onChange={e=>handleChange(e)}/>
            <button className="getWeather" type="submit">submit</button>
        </form>
        {
            (weather?.name) ?
            <div>
                <DisplayWeather data={weather} />
            </div>
            :null
        }
    
    </div>
    </>)
}