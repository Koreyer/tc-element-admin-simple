import request from '@/utils/axiosRequest'

const login = (data) => {
    return request({
        url: '/Authentication/LoginByEmail',
        data,
        method: 'post'
    })
}

const sendEmail = (email) => {
    return request({
        url: '/Authentication/CheckByEmail?email=' + email,
        method: 'get'
    })
}

export default {
    login, sendEmail
}