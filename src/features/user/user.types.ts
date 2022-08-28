
export type UserDetails = {
    email: string | null,
    displayName: string | null
}  

export type UserState = {
    userData: UserDetails,
    status: string
}

export type UnauthUser = {
    UserEmail: string,
    UserPassword:string
}