import { User } from "firebase/auth"
import { DocumentData } from "firebase/firestore"

export type UserData = {
    email: string,
    displayName: string,
    createdAt?: {
        seconds: number,
        nanoseconds: number
    } | Date | number

} | User | {}

export type UserState = {
    userData: UserData & {
        email: string,
        displayName: string, 
    } | any,
    ///check if any can be changed to a more definitive type???
    status: string
}