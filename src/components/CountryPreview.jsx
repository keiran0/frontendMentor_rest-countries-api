export default function CountryPreview({ country, mode, countryClick }) {



    return (
        <div className={`card ${mode}`} onClick={countryClick}>
            <img src={country['flags']['png']} alt={country['flag']['alt']}></img>
            <div className="preview-text">
                <h2>{country['name']['common']}</h2>

                <p>
                    <span className="field">Population: </span>
                    <span>{country['population'].toLocaleString('en-US')}</span>
                </p>
                <p>
                    <span className="field">Region: </span>
                    <span>{country['region']}</span>
                </p>
                <p>
                    <span className="field">Capital: </span>
                    <span>{country['capital'] ? country['capital'] : 'None'} </span>
                </p>
            </div>
        </div>
    )
}