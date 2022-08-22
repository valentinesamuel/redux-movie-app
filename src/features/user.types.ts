import { User } from "firebase/auth"

export type UserData = {
    email: string,
    displayName: string,
    createdAt?: {
        seconds: number,
        nanoseconds:number
    } | Date | number

}| User

export type UserState = {
    userData:UserData | {},
    status: string
}