import React ,{useState,useEffect} from 'react'
import './style.css'
import {fetchCountries} from '../../api'
import {NativeSelect ,FormControl} from '@material-ui/core';

 const CountryPicker=({ handleCountryChange})=> {
    const [fetchedCountries,setFetchedCountries]=useState([]);
    useEffect(()=>{
        const fetchAPI=async()=>{
          setFetchedCountries(await fetchCountries());
        } 
        fetchAPI();
    },[setFetchedCountries]);
    console.log(fetchedCountries);
    return (
       <FormControl class="formControl">
           <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value )}>
                <option value='global'>Global</option>
               {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    )
}
export default CountryPicker ;
