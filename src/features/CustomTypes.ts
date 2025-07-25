export type Request = {
    id: number,
    title: string,
    text: string,
    category: string
    dateCreated: string
}

export interface IFormInput {
    title: string,
    text: string,
    category: string
}

export type User = {
    email: string,
    password: string,
    id: string,
    token: string
}

export interface IUser {
    email: string,
    password: string
}

export const currentUrl = new URL(window.location.href).pathname

export const regex = /\d+/


