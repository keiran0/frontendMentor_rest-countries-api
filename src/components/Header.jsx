export default function Header({clickHandler, mode}){

    return(

        <header className={`menu ${mode}`}>
            <p className="title">Where in the world?</p>
            <button onClick={clickHandler} className={mode}>
                <i className="fa-solid fa-moon"></i>
                Dark Mode
            </button>
        </header>
        

        
    )
}