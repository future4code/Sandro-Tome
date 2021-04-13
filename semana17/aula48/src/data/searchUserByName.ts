import conneciton from '../connection'

export default async function searchUserByName(title:string):Promise<any> {
    const result = await conneciton
    .select("*")
    .from("aula48_exercicio")
    .where('name', 'like',`%${title}%`)

    return result
} 