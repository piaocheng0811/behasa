const menu_items = [
    {
        name: 'E-Commerce',
        icon: 'fa fa-shopping-cart',
        child: [
            {
                name: 'Dashboard',
                link: '/',
                icon: ' fa fa-home'
            },
            {
                name: 'Product gallery ',
                link: '/product_gallery',
                icon: 'fa fa-angle-double-right'
            }
        ]
    },
    {
        name: 'Charts',
        title: ""
    },
    {
        name: ' Charts',
        icon: 'fa fa-bar-chart',
        child: [
            {
                name: 'Chartist charts',
                link: '/chartist',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Frappe Charts',
                link: '/frappe-charts',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Echarts - Line',
                link: '/e_linecharts',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Echarts - Bar',
                link: '/e_barcharts',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Echarts - Pie',
                link: '/e_piecharts',
                icon: 'fa fa-angle-double-right'
            }
        ]
    },
    {
        name: 'Tables',
        icon: 'fa fa-table',
        child: [
            {
                name: 'Simple tables',
                link: '/simple_tables',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Advanced tables',
                link: '/advanced_tables',
                icon: 'fa fa-angle-double-right'
            }
        ]
    },
    {
        name: 'Files & Gallery',
        title: ""
    },
    {
        name: "Files",
        icon: "fa fa-file-o",
        child: [
            {
                name: 'Multi file upload',
                link: '/multi_file_upload',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Vue dropzone',
                link: '/vue_dropzone',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Gallery',
                link: '/gallery',
                icon: 'fa fa-angle-double-right'
            }
        ]
    },
    {
        name: 'Maps',
        link: '/gmaps',
        icon: 'fa fa-map-marker'
    },
    {
        name: "Users",
        icon: "fa fa-users",
        child: [
            {
                name: 'User profile',
                link: '/user_profile',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Add new user',
                link: '/add_user',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Users list',
                link: '/users_list',
                icon: 'fa fa-angle-double-right'
            }
        ]
    },
    {
        name: 'Pages',
        title: ""
    },
    {
        name: "Pages",
        icon: "fa fa-files-o",
        child: [
            {
                name: 'Login',
                link: '/login',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Register',
                link: '/register',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Forgot password',
                link: '/forgotpassword',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Reset password',
                link: '/reset_password',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Lockscreen',
                link: '/lockscreen',
                icon: 'fa fa-angle-double-right'
            }
        ]
    },
    {
        name: "Extra Pages",
        icon: "fa fa-files-o",
        child: [
            {
                name: 'Blank',
                link: '/blank',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Invoice',
                link: '/invoice',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Contact us',
                link: '/contact_us',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: 'Pricing',
                link: '/pricing',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: '404',
                link: '/404',
                icon: 'fa fa-angle-double-right'
            },
            {
                name: '500',
                link: '/500',
                icon: 'fa fa-angle-double-right'
            }
        ]
    }
];
export default menu_items;
