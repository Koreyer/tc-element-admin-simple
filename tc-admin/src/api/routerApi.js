
//模拟数据
const getRouter = () => {
    return [
        {
            id: 1,
            title: 'menu.dashboard',
            name: 'Dashboard',
            icon: '#icon-dashboard',
            path: '/Dashboard',
            component: '/src/views/Demo4.vue'
        },
        {
            id: 2,
            title: 'menu.group',
            name: 'Group',
            icon: '#icon-user',
            children: [
                {
                    id: 21,
                    title: 'menu.user',
                    name: 'Demo1',
                    icon: '#icon-user',
                    path: '/Demo1',
                    component: '/src/views/Demo1.vue'
                },
                {
                    id: 22,
                    title: 'menu.share',
                    name: 'Demo2',
                    icon: '#icon-share',
                    path: '/Demo2',
                    component: '/src/views/Demo2.vue'
                }
            ]
            // }, {
            //     title: 'menu.table',
            //     name: 'Table',
            //     icon: '#icon-setting'
        }, {
            id: 3,
            title: 'menu.table',
            name: 'Table2',
            icon: '#icon-setting',
            path: '/Table2',
            component: '/src/views/Table2/Table.vue'
        }, {
            id: 4,
            title: 'menu.setting',
            name: 'Demo3',
            icon: '#icon-setting',
            path: '/Demo3',
            component: '/src/views/Demo3.vue'
        }, {
            id: 5,
            title: 'menu.urlPath',
            name: 'UrlPath',
            icon: '#icon-setting',
            path: '/UrlPath',
            component: '/src/views/UrlPath/UrlPath.vue'
        }
    ]
}

export default {
    getRouter
}