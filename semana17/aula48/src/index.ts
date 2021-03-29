import express from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
import { getAllUsers } from './endpoints/getAllUsers'
import { getUserByType } from './endpoints/getUserByType'
import { getUserByName } from './endpoints/getUserByName'
const app = express()

app.use(express.json())
app.use(cors())

app.get('/users', getAllUsers)
app.get('/users/search', getUserByName)
app.get('/users/:type', getUserByType) 

const server = app.listen(process.env.PORT || 3003, () =>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is Running in http://localhost:${address.port}`)
    }else{
        console.log(`Error.`)
    }
})

export default app 