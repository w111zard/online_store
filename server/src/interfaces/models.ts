import { UploadedFile } from "express-fileupload"

export interface IProduct {
    id: number,
    name: string,
    price: number,
    image: string,
    typeId: number,
    brandId: number,
    product_infos: [IProductInfo]
}

export interface IProductInfo {
    title: string,
    description: string
}

export interface IRole {
    id: number
    name: string
}

export interface IUser {
    id: number,
    email: string,
    password: string
    roles: [IRole]
}