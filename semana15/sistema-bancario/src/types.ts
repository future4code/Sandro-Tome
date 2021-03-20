export type Transactions = {
    value: number,
    date: Date,
    description: string
}

export type account = {
    name: string,
    CPF: string,
    birthday: Date,
    balance: number,
    statement: Array<Transactions>
}