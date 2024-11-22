import { useNavigate } from "react-router-dom";

const Leave = () => {

    const navigate = useNavigate();


    const handleSubmit = async (event: React.MouseEventHandler<HTMLButtonElement> | any) => {
        event.preventDefault();
                navigate("/") 
            };

    return(
        <div className="botaoforma">
            <button className="submit-button" onClick={handleSubmit}>Sair</button>
        </div>
    )
};

export default Leave;