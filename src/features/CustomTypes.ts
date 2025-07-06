export type ReqItem = {
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

export const currentUrl = new URL(window.location.href).pathname

export const regex = /\d+/

export const editId = Number(currentUrl.match(regex)?.[0])
