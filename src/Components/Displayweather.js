import React,{useState} from "react";
import "./displayweather.css";
export default function DisplayWeather(props){
   const {data}=props;
   const [IconUrl, setIconUrl] = useState("http://openweathermap.org/img/wn/" +
   `${data.cod !== 404 ? data.weather[0].icon : null}` +
   ".png");

    return(<div className="displayWeather">
        {
            data.cod!=404 ?
           <React.Fragment><div className="mainCard">
           <span className="cardTitle">{data.name},{data.sys.country}.weather</span>
           <span className="cardSubTitle">As of{new Date().toLocaleTimeString()}</span>
           <center>   
           <h1>{Math.floor(data.main.temp-273.15)} <sup>o</sup></h1>
           
           </center>
           <span className="weather-main">{data.weather[0].main}</span>
           <img src="IconUrl" className="weather-icon" alt=""></img>
           <span className="weather-description ">{data.weather[0].description}</span>
           <div className="weatherDetails">
               <div className="section1">
                   <table>
                       <tr>
                           <td>
                               <h4>High/Low</h4>
                           </td>
                           <td>
                               <span>{Math.floor(data.main.temp_max-273.15)}/{""}{Math.floor(data.main.temp_min-273.15)}<sup>o</sup>c</span>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <h4>Humidity</h4>
                           </td>
                           <td>
                               <span>{data.main.humidity}%</span>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <h4>Pressure</h4>
                           </td>
                           <td>
                               <span>{data.main.pressure}hPa</span>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <h4>Visibility</h4>
                           </td>
                           <td>
                               <span>{data.visibility/1000}km</span>
                           </td>
                       </tr>
                   </table>
               </div>
               <div className="section2">
                   <table>
                       <tr>
                           <td>
                               <h4>Wind</h4>
                           </td>
                           <td>
                               <span>{Math.floor((data.wind.speed*18)/5)}km/hr</span>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <h4>Wind Direction</h4>
                           </td>
                           <td>
                               <span>{data.wind.deg}<sup>o</sup>deg</span>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <h4>Sunrise</h4>
                           </td>
                           <td>
                               <span>{new Date(data.sys.sunrise*1000).toLocaleTimeString()}</span>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <h4>Sunset</h4>
                           </td>
                           <td>
                               <span>{new Date(data.sys.sunset*1000).toLocaleTimeString()}</span>
                           </td>
                       </tr>
                   </table>
               </div>
           </div>

       </div></React.Fragment>
            :<div className="mainCard">
                <h2>{data.message}</h2>
            </div>
        }
        
    </div>)
}