import conneciton from "../connection"


export default async function selectAllUsers():Promise<any> {
    const result = await conneciton.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)

    return result[0]
 } 