import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeed } from '../routes/Coordinator'

export const login = (body, clear, history) => {
    axios.post(`${BASE_URL}/login`, body)
    .then((response) => {
        console.log(response)
        localStorage.setItem('token',response.data.token)
        clear()
        goToFeed(history)
    })
    .catch((error) => 
        alert(error.response.data.message)
    )
}

export const signUp = (body, clear, history) => {
    axios.post(`${BASE_URL}/signup`, body)
    .then((response) => {
        console.log(response)
        localStorage.setItem('token',response.data.token)
        clear()
        goToFeed(history)
    })
    .catch((error) =>
        alert(error.response.data.message)
    )
}