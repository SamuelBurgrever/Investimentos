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
            </nav> 
        </>
    );

}

export default VerticalBar;