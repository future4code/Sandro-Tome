import React from "react";
import { useHistory } from "react-router-dom";


const ManagePage = () => {

    const history = useHistory();

    const goBack = () => {
        history.goBack();
      };

    return (
        <div>
            <h1>ManagePage</h1>
            <button onClick={goBack}>Voltar</button>
        </div>
    )     
};

export default ManagePage;