const response = await fetch("https://restcountries.com/v3.1/all")
const data = await response.json()

export default function CountryDetail({ countryName, backHandler, mode }) {

    let detail = {}

    data.forEach(function (country) {
        if (country['name']['common'] === countryName) {
            detail = { ...country, ...detail }
            //console.log(detail["currencies"])
        }
    })

    let currencies = []
    Object.values(detail["currencies"]).forEach(function (currency) {
        currencies.push(currency["name"])
    })

    let languages = []
    Object.values(detail["languages"]).forEach(function (language) {
        languages.push(language)
    })

    let abbreBorders = []

    if (detail["borders"]) {
        detail["borders"].forEach(function(border){
            data.forEach(function(country){
                if (country["cca3"]===border){
                    abbreBorders.push(country['name']['common'])
                }
            })
        })
    }

    return (
        <main className="country-detail">
            <div>
                <button onClick={backHandler} className={`${mode} back-button`}>
                    <i class="fa-solid fa-arrow-left"></i>
                    Back
                </button>
            </div>
            <div className="detail-main-container">
                <div className="detail-flag-container">
                    <img src={detail["flags"]["png"]} alt={detail["flags"]["alt"]} />
                </div>
                <div className="detail-text">
                    <h1>{detail["name"]["common"]}</h1>
                    <div className="detail-text-container">
                        <div>
                            <p><span className="field">Official Name: </span>{detail["name"]["official"]}</p>
                            <p><span className="field">Population: </span>{detail["population"].toLocaleString('en-US')}</p>
                            <p><span className="field">Region: </span>{detail["region"]}</p>
                            <p><span className="field">Sub Region: </span>{detail["subregion"]}</p>
                            <p><span className="field">Capital: </span>{detail["capital"]}</p>
                        </div>
                        <div>
                            <p><span className="field">Top Level Domain: </span>{detail["tld"][0]}</p>
                            <p><span className="field">Currencies: </span>{currencies.join(', ')}</p>
                            <p><span className="field">Languages: </span>{languages.join(', ')}</p>
                        </div>
                    </div>
                    <div className="border-countries-container">
                        <span className="field">Border Countries: </span>{detail["borders"] ? abbreBorders.map(border => <button key={`${border}${countryName}`} className={`${mode}`}>{border}</button>) : "None"}
                    </div>
                </div>
            </div>

        </main>
    )
}