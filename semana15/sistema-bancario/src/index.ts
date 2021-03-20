import express, {Express, Request, Response} from "express"
import cors from "cors"
import {accounts} from "./accounts"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req:Request, res:Response) => {
    try {
        const {name, CPF, birthdayAsString} = req.body
        const {day, month, year} = birthdayAsString.split("/")
        const birthday: Date = new Date()
        
        const ageInMs:number = Date.now() - birthday.getTime()
        const age:number = ageInMs / 1000 / 60 / 60 / 24 / 365
        
        if(age < 18){
            res.statusCode = 406
            throw new Error("O usuário deve ter mais que 18 anos")
        }

        accounts.push({
            name,
            CPF,
            birthday,
            balance: 0,
            statement: []
        })

        res.status(201).send("Conta criada com sucesso!")
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}) 


app.get("/users/all", (req: Request, res: Response) =>{
    try {
        if(!accounts.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }
        res.status(200).send(accounts)
    } catch (error) {
        res.send(error.message)
    }
})

app.listen(3003, () =>{
    console.log("Servidor rodando na porta 3003")
})