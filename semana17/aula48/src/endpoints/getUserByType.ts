import {Request, Response} from 'express'
import selectByType from '../data/selectByType'


export const getUserByType = async(req: Request, res: Response):Promise<void>=>{
    const type: any = req.params.type

    try {
        const users = await selectByType(type)

        console.log(users)
        res.status(200).send(users)
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
} 