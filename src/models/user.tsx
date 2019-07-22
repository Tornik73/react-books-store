export interface User {
    id: number
    email: string
    password: string
    telephone: string
    age: number
    img: string
    token: string
}

export interface RegisterUser {
    email: string
    password: string
    telephone: string
    age: number
    img: string
}