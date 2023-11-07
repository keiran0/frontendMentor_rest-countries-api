import CountryPreview from './CountryPreview'
import data from '../data.mjs'

export default function CountriesPreview({ mode, filteredRegion, filteredText, handleCountryClick }) {

    let filteredData = []

    if (filteredRegion !== '') {
        if (filteredText !== '') {
            data.forEach(function(country){
                if (country['region'] === filteredRegion && country["name"]["common"].toUpperCase().search(filteredText.toUpperCase())>=0) {
                    filteredData.push(country)
                }
            })
        } else {
            
            data.forEach(function(country){
                if (country['region'] === filteredRegion) {
                    filteredData.push(country)
                }
            })
        }
    } else { //no region filtered
        if (filteredText !== '') {
            data.forEach(function(country){
                if (country["name"]["common"].toUpperCase().search(filteredText.toUpperCase())>=0) {
                    filteredData.push(country)
                }
            })
        } else {
            filteredData = data
        }
    }

    if (filteredData.length === 0) {
        return(
            <p>No countries found.</p>
        )
    }

    return ( 
        <div className="home-screen-grid">
        {filteredData.map(country => <CountryPreview key={country['name']['common']}
    country={country} mode={mode} countryClick={(e)=>handleCountryClick(e)}/>)}
    </div>
        
    )


}

