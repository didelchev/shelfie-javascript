export const logoutComponent = () => {
    const cookieName = 'auth'
    return document.cookie = cookieName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}