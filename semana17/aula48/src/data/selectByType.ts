import conneciton from '../connection'

export default async function selectByType(type: string):Promise<any> {
    const result = await conneciton
    .select("*")
    .from('aula48_exercicio')
    .where('type', 'like', `${type}`)

    console.log(result)
    return result
} 