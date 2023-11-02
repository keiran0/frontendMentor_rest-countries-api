export default function Header({clickHandler, mode}){

    return(

        <header className={`menu ${mode}`}>
            <h1>Where in the world?</h1>
            <button onClick={clickHandler} className={mode}>
                <i className="fa-solid fa-moon"></i>
                Dark Mode
            </button>
        </header>
        

        
    )
}