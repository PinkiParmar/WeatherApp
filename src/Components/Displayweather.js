import React from "react";
import "./displayweather.css";
export default function DisplayWeather(props){
   const {data}=props;
    return(<div className="displayWeather">
        <div className="mainCard">
            <span className="cardTitle">{data.name},{data.sys.country}.weather</span>
        </div>
    </div>)
}