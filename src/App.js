import './App.css';
import {fetchData} from './api/index';
import {Cards,Chart,CountryPicker} from './components';
import React from 'react';
import logo from './logo.jpg'
class App extends React.Component {
  state={
    data:{},
    country:''
  }
  async componentDidMount(){
     const fetchDataOfApi=await fetchData();
     this.setState({
       data:fetchDataOfApi
     });
     
  }
  handleCountryChange=async(country)=>{
    const fetchedData=await fetchData(country);
    this.setState({
      data:fetchedData
    });
   console.log(fetchedData);
  }
  render()
  {
    const {data}=this.state;
    return ( 
   
    <div className="container">
     
      <img src={logo}/>
      <h1 className='logo'>Covid-19 Tracker</h1>
      
      
       <Cards data={data}/>
       <CountryPicker handleCountryChange={this.handleCountryChange}/>
       <Chart/>
       <p>Developed By Satish Shriwas</p>
    </div>
  );}
}

export default App;
