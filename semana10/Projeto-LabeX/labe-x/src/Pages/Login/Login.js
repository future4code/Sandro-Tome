import React from "react";
import { useHistory } from "react-router-dom";
import { goToManagePage } from "../../Routes/Coordinator";

const Login = () => {
    const history = useHistory()
  return (
    <div>
        <h1>Login</h1>
        <button onClick={() => goToManagePage(history)}>
            Entrar
        </button>
    </div>
  )
};

export default Login;