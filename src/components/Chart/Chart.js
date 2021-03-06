import React, {useState,useEffect} from 'react'
import './style.css'
import {fetchDailyData} from '../../api/index'
import {Line,Bar} from 'react-chartjs-2';
import  './style.css';
export default function Chart() {
    const[dailyData,setDailyData]=useState([]);
    useEffect( ()=>{
      const fetchApi=async()=>{
          setDailyData( await fetchDailyData());
      }
      fetchApi();
    },[]);
    const lineChart=(
        dailyData.length?( <Line
       
        data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true
            },{
                data:dailyData.map(({deaths})=>deaths),
                label:'Deaths',
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.4)',
                fill:true
            }]
        }}
        />):null
    );
    return (
        <div className="container">
              {lineChart}
        </div>
    )
}
