const rules = {
    email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        { pattern: /^[a-zA-Z0-9@.]+$/, message: '请输入字母、数字和@', trigger: 'blur' },
    ], password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ]
}


export default {
    rules
}