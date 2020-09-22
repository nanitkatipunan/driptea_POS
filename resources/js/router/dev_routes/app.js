export default {
    routes: [
        {
            path: '/',
            name: 'landing',
            component: resolve => require(['@/js/basic/landing'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        // {
        //     path: '/login',
        //     name: 'login',
        //     component: resolve => require(['@/assets/js/basic/Login'], resolve),
        //     meta: {
        //         tokenRequired: false
        //     }
        // },
        // {
        //     path: '/register',
        //     name: 'register',
        //     component: resolve => require(['@/assets/js/basic/Register'], resolve),
        //     meta: {
        //         tokenRequired: false
        //     }
        // },
        // {
        //     path: '/header',
        //     name: 'header',
        //     component: resolve => require(['@/assets/js/basic/Header'], resolve),
        //     meta: {
        //         tokenRequired: false
        //     }
        // },
        // {
        //     path: '/userDashboard',
        //     name: 'userDashboard',
        //     component: resolve => require(['@/assets/js/modules/dashboard/userDashboard'], resolve),
        //     meta: {
        //         tokenRequired: true
        //     }
        // },
        // {
        //     path: '/profile',
        //     name: 'profile',
        //     component: resolve => require(['@/assets/js/modules/profile/profile'], resolve),
        //     meta: {
        //         tokenRequired: true
        //     }
        // },
        // {
        //     path: '/addProduct',
        //     name: 'addProduct',
        //     component: resolve => require(['@/assets/js/modules/product/addProduct'], resolve),
        //     meta: {
        //         tokenRequired: true
        //     }
        // },
        // {
        //     path: '/cart',
        //     name: 'cart',
        //     component: resolve => require(['@/assets/js/modules/order/cart'], resolve),
        //     meta: {
        //         tokenRequired: true
        //     }
        // },
        // {
        //     path: '/order',
        //     name: 'order',
        //     component: resolve => require(['@/assets/js/modules/order/order'], resolve),
        //     meta: {
        //         tokenRequired: true
        //     }
        // },
    ],
}