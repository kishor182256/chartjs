import { Card, CardContent, FormControl, MenuItem, Select } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css'
import InfoBox from './components/InfoBox';
import LineGraph from './components/LineGraph';
import Map from './components/Map';
import Table from './components/Table';
import { Sortdata } from './helper/utils';
import "leaflet/dist/leaflet.css";
import numeral from 'numeral'
import { Popup } from 'react-leaflet';
import { Circle } from 'react-leaflet';


function App() {

  const [countries,setCountries] = useState([]);
  const [selectedCountry,setSelectedCountry] = useState('worldwide');
  const [selectedCountryInfo,setSelectedCountryInfo] = useState({})
  const [tabledata,setTabledata] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 29.092952, lng: 74.7493451 });
  
  console.log('selectedCountryinfolatlong====>',selectedCountryInfo);

 

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setSelectedCountryInfo(data);
        
      });
  }, []);

  useEffect(() => {
    const getdata = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries').then((response) => response.json())
        .then((data) => {
          const country = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }
          ))
          const sorteddata = Sortdata(data)
          setCountries(country)
          setTabledata(sorteddata)
        })
        .catch((error) => {
          console.error('countries===>', error);
        })
    }
    getdata()

  }, [])

  const setCountryValue = async(e) =>{
    const countrycode = e.target.value
      const url = countrycode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all': 
      `https://disease.sh/v3/covid-19/countries/${countrycode}`

      await fetch(url).then(response =>response.json()).then((data) => {
        setSelectedCountry(countrycode)
        setSelectedCountryInfo(data)
        setMapCenter([data.countryInfo.lat,data.countryInfo.long])
        // console.log('selectedCountryinfo', data)
      }).catch((err) => {
        console.error('countriesurldata',err);
      })
  }
  return (
    <div className="app">
      <div className="app_left">
        <div className="app_header">
          <h1>COVID </h1>
          <FormControl className="app_dropdown">
            <Select variant='outlined' value={selectedCountry}
              onChange={setCountryValue}>
              <MenuItem value='worldwide'>Worldwide</MenuItem>
              {countries.map((country) => {
                return (
                  <MenuItem key={country.name}
                    value={country.value}>
                    {country.name}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </div>
        <div className="info_stats">
          <InfoBox title='COVID-CASES' total={2000} cases={selectedCountryInfo.todayCases} />
          <InfoBox title='Recovers' total={1200} cases={selectedCountryInfo.todayRecovered} />
          <InfoBox title='Deaths' total={345} cases={selectedCountryInfo.todayDeaths} />
        </div>
        <Map countries={countries} center={mapCenter} data={mapCenter} />
      </div>
      {/* div right start  */}

      <Card className="app_right">
        <CardContent>
          <h3>Live Cases </h3>   
         {/* table */}
         <Table countries={tabledata}/>
        {/* grpaph */}
        <h1>Worldwide New Cases</h1>
        <LineGraph/>
        </CardContent>
      </Card>
       
    </div>
  );
}

export default App;
