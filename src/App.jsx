import Header from './components/Header';
import Home from './components/Home'
import CountryDetail from './components/CountryDetail';
import { useState } from 'react';

import './main.css'

function App() {

  const [mode, setMode] = useState("light")

  function modeHandler(){
    if (mode==="light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }

  const [country, setCountry] = useState('')

  function handleCountryClick(e) {
    setCountry(e.target.querySelector('h2').innerHTML)
  }

  function backHandler(){
    setCountry('')
  }

  return (
    <div className={`screen ${mode}`}>
      <Header clickHandler={modeHandler} mode={mode} />
      {country===''?<Home mode={mode} handleCountryClick={(e) => handleCountryClick(e)}/>:<CountryDetail countryName={country} backHandler={backHandler} mode={mode}/>}
    </div>
  )


}

export default App
