import Leave from "../Redirecionamento/Leave";
import "./VerticalBar.css"


const VerticalBar = () => {
    return(
        <>
        <nav className="verticalbar">
                <div className="container-fluid">    
                    <h1>INVESTIMENTOS</h1>                
                    <Leave/>
                </div>
                <div>
                    <img className="logo" src="src\assets\INVESTI.png"></img>
                </div>
            </nav> 
            
        </>
        );

}

export default VerticalBar;