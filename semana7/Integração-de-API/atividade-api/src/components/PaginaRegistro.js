import React from 'react';
import axios from 'axios';
import {baseUrl, axiosConfig} from '../parametros'

export class PaginaRegistro extends React.Component {
    state = {
        inputNome: '',
        inputEmail: ''
    }

    alteraInputNome = (event) => {
        this.setState({inputNome: event.target.value})
    }

    alteraInputEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    criarUsario = () => {
        const body = {
            nome: this.state.inputNome,
            email: this.state.inputEmail
        }

        axios.post(baseUrl, body, axiosConfig)
        .then((res) => {
            alert('Usuário criado com sucesso!')
            this.setState({inputNome: '', inputEmail:''})
        }) 
        .catch((error => {
            alert('Erro: não foi possível criar o usuário.')
        }))
    }

    render() {
        return (
            <div>
                <h2>Cadastro</h2>
                <input placeholder='Nome' value={this.state.inputNome} onChange={this.alteraInputNome} />
                <input placeholder='E-mail' value={this.state.inputEmail} onChange={this.alteraInputEmail} />
                <button onClick={this.criarUsario}>Cadastrar</button>
            </div>
        )
    }
}
