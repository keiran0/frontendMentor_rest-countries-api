import '../main.css';

export default function Search({mode, onRegionChange, region, onTextChange}){


    return(
        <div className={`search`}>
        <div className={`input-container ${mode}`}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input placeholder='Search for a country...' className={mode} onChange={onTextChange}/>
        </div>

        <div className={`select-container ${mode}`}>
          <select name="region" className={mode} onChange={onRegionChange} value={region}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Antarctic">Antarctic</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    )
}