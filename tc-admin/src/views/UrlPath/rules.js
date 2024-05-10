const rules = {
    id: [
        { required: true, message: '请输入Id', trigger: 'blur' },
    ], name: [
        { required: true, message: '请输入路由名称', trigger: 'blur' },
        { pattern: /^[a-zA-Z0-9]+$/, message: '请输入字母、数字', trigger: 'blur' },
    ], title: [
        { required: true, message: '请输入i18n菜单名称', trigger: 'blur' },
    ], path: [
        { required: true, message: '请输入路由路径', trigger: 'blur' },
        { pattern: /^[a-zA-Z0-9/]+$/, message: '请输入字母、数字和/', trigger: 'blur' },
    ], component: [
        { required: true, message: '请输入组件路径', trigger: 'blur' },
        { pattern: /^[a-zA-Z0-9./]+$/, message: '请输入字母、数字、/和.', trigger: 'blur' },
    ], icon: [
        { required: true, message: '请输入图标名称', trigger: 'blur' },
        { pattern: /^[!-~]+$/, message: '请输入规定的图标命名', trigger: 'blur' },
    ]
}


export default {
    rules
}