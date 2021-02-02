import React from "react";
import { useHistory } from "react-router-dom";
import { goToOnTravelsPage, goToLoginPage } from "../../Routes/Coordinator";

const HomePage = () => {
    const history = useHistory()
    return (
        <div>
            <h1>LabeX</h1>
            <button onClick={() => goToOnTravelsPage(history)}>
                Quero viajar!
            </button>
            <button onClick={() => goToLoginPage(history)}>
                Quero organizar uma viagem!
            </button>
        </div>
    ) 
};

export default HomePage;