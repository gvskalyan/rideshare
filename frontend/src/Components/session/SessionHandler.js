const KEYS = {
    user: 'user',
    accessToken: 'accessToken'
}

export const isUserLoggedIn = () => {
    return getCurrentUserSession() !== null && getUserAccessToken() !== null
}


export const userLogOut = () => {
    if (isUserLoggedIn()) {
        clearUserAccessToken()
        clearUserSession()
    }
}

export const setUserDetails = (userData) => {
    localStorage.setItem(KEYS.user, JSON.stringify(userData))
}

export const clearUserSession = () => {
    localStorage.removeItem(KEYS.user)
}

export const getCurrentUserSession = () => {
    return localStorage.getItem(KEYS.user) ? JSON.parse(localStorage.getItem(KEYS.user)) : null
}

export const setAccessToken = (accessToken) => {
    localStorage.setItem(KEYS.accessToken, accessToken)
}

export const clearUserAccessToken = () => {
    localStorage.removeItem(KEYS.accessToken)
}
 
export const getUserAccessToken = () => {
    return localStorage.getItem(KEYS.accessToken)
}

export const getKeyUser = () => {
    return localStorage.getItem(KEYS.user)
}