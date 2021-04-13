import {Request, Response} from 'express'
import serachUserByName from '../data/searchUserByName'
import {searchInput} from '../searchInputs'

export const getUserByName = async(req: Request, res: Response): Promise<void> =>{
    const name: any = req.query.name

    try{
        const users = await serachUserByName(name)
         if(!users.length){
             res.statusCode = 404
             throw new Error("No users found")
        }

        res.status(200).send(users)

    }catch(error){
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
} 