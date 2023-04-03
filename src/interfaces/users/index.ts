export interface IUserRequest {
    name: string
    email: string
    password: string
    isAdm: boolean
}

export interface IUser {
    updatedAt: Date
    createdAt: Date
    isActive: boolean
    isAdm: boolean
    email: string
    name: string
    id: string
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    email?: string
    password?: string
}

export interface IUserToken {
    id: string,
    isAdm: boolean
}