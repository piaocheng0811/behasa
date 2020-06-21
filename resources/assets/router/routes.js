import layout_routes from './layout'
import admin_layout_routes from './admin_layout';

const routes = [
    {
        path: '/',
        name: 'layout',
        component: resolve => require(['src/layout'], resolve),
        children: layout_routes
    },
    {
        path:'/choose-option',
        name: 'choose-option',
        component:resolve => require(['pages/choose_option'], resolve),
    },
    {
        path: '/admin',
        name: 'Admin Layout',
        component: resolve => require(['src/admin_layout'], resolve),
        children: admin_layout_routes
    },

    {
        path: '/admin/login',
        name: 'login',
        component: resolve => require(['pages/admin_login'], resolve),
        meta: {
            title: "Admin Login",
        }
    },
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['pages/login'], resolve),
        meta: {
            title: "Login",
        }
    },
    {
        path: '/register',
        name: 'register',
        component: resolve => require(['pages/register'], resolve),
        meta: {
            title: "register",
        }
    },
    {
        path: '/forgotpassword',
        name: 'forgotpassword',
        component: resolve => require(['pages/forgotpassword'], resolve),
        meta: {
            title: "Forgot Password",
        }
    },
    {
        path: '/reset_password',
        name: 'reset_password',
        component: resolve => require(['pages/reset_password'], resolve),
        meta: {
            title: "Reset Password",
        }
    },
    {
        path: '/500',
        component: resolve => require(['pages/500'], resolve),
        meta: {
            title: "500",
        }
    },
    {
        path: '*',
        component: resolve => require(['pages/404'], resolve),
        meta: {
            title: "404",
        }
    }
]
export default routes
