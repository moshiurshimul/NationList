import React, { useState, useEffect } from 'react';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => alert('sorry no data found'))
  }, [])

  // console.log(countries)

  const handleVistedCountry = (country) => {
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountry);
  };
  

  return (
    <div className="App">
      <header className="App-header">

        <h1>Loaded Countries: {countries.length}</h1>
        <h3>My Visted Country: {visitedCountry.length}</h3>
        {
          countries.map(country => <Country handleClick={handleVistedCountry} key={country.alpha3Code} countryData={country}></Country>)
        }
      </header>
      <p>Developed by <a href="https://github.com/moshiurshimul" target="_blank" rel="noopener noreferrer">MoshiurShimul</a></p>
    </div>
  );
}

export default App;
