const setToken = (token) => {
    localStorage.setItem('token', token)
}
const getToken = () => {
    return localStorage.getItem('token')
}

export default {
    setToken,
    getToken
}