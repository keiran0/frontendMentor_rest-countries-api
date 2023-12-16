import CountryPreview from './CountryPreview'

export default function CountriesPreview({ mode, filteredRegion, filteredText, handleCountryClick, countryData }) {

    let filteredData = []

    if (filteredRegion !== '') {
        if (filteredText !== '') {
            countryData.forEach(function(country){
                if (country['region'] === filteredRegion && country["name"]["common"].toUpperCase().search(filteredText.toUpperCase())>=0) {
                    filteredData.push(country)
                }
            })
        } else {
            
            countryData.forEach(function(country){
                if (country['region'] === filteredRegion) {
                    filteredData.push(country)
                }
            })
        }
    } else { //no region filtered
        if (filteredText !== '') {
            countryData.forEach(function(country){
                if (country["name"]["common"].toUpperCase().search(filteredText.toUpperCase())>=0) {
                    filteredData.push(country)
                }
            })
        } else {
            filteredData = countryData
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

