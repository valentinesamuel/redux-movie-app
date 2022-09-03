
export type UserDetails = {
    email: string | null,
    displayName: string | null
}

export type UserState = {
    userData: UserDetails,
    status: string,
    loading: boolean
    confetti? : boolean
}

export type UnauthUser = {
    UserEmail: string,
    UserPassword: string
}

export type NewUserDetails = {
    email: string,
    password: string,
    confirmPassword: string,
    displayName: string

}