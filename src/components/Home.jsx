import Search from "./Search";
import CountriesPreview from "./CountriesPreview";
import { useState } from 'react'

export default function Home({ mode, handleCountryClick, countryData }) {

    const [region, setRegion] = useState('')

    const [text, setText] = useState('')

    return (
        <main className={"home-screen"}>
            <Search mode={mode} onRegionChange={(e) => setRegion(e.target.value)} region={region} onTextChange={(e) => setText(e.target.value)} />
            <CountriesPreview mode={mode} filteredRegion={region} filteredText={text} handleCountryClick={handleCountryClick} countryData={countryData}/>
        </main>
    )
}