import request from '@/utils/axiosRequest'


const loginByEmail = async (account) => {
    return request({
        url: '/Authentication/LoginByEmail',
        data: account,
        method: 'post'
    })
}

export default {
    loginByEmail
}