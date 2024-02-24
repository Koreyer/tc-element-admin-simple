import elementZhLocale from 'element-plus/es/locale/lang/zh-cn.mjs'

const zh = {
    ...elementZhLocale,
    login: {
        welcome: "欢迎使用本系统",
        tips: '请输入你的账户信息',
        logIn: "登录",
        userName: '用户名',
        email: '邮箱',
        password: '密码',
        forgot: '忘记密码?',
        logOut: '退出登录',
        docs: '文档',
        success: '登陆成功!',
        faild: '登录失败,账号或密码错误!',
        lockOut: '账号已锁定!'
    },
    column: {
        city: '城市',
        name: '名称',
        fullName: '姓名',
        operations: '选项'
    },
    menu: {
        dashboard: '首页',
        group: '分组',
        user: '用户',
        setting: '设置',
        share: '分享'
    },
    data: {
        detail: '详情',
        edit: '编辑',
        delete: '删除',
        add: '新增',
        search: '搜索',
        placeholder: '请输入内容',
        select: '下拉选择'
    }, role: {
        noRole: '没有权限'
    }
}


export default zh