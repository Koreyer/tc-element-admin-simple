
//模拟数据
const getRouter = () => {
    return [
        {
            title: 'menu.dashboard',
            name: 'Dashboard',
            icon: '#icon-dashboard'
        },
        {
            title: 'menu.group',
            name: 'Group',
            icon: '#icon-user',
            children: [
                {
                    title: 'menu.user',
                    name: 'Demo1',
                    icon: '#icon-user'
                },
                {
                    title: 'menu.share',
                    name: 'Demo2',
                    icon: '#icon-share'
                }
            ]
        }, {
            title: 'menu.table',
            name: 'Table',
            icon: '#icon-setting'
        }, {
            title: 'menu.setting',
            name: 'Demo3',
            icon: '#icon-setting'
        }
    ]
}

export default {
    getRouter
}