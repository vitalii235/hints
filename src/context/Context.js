import React, { createContext } from 'react'

const UserContext = createContext()


const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export const ProviderFunction = ({children, state}) => {
    return <UserProvider value={state}>{children}</UserProvider>
}

export default UserContext