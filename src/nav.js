export default [
    {
        label:'داشبورد',
        icon:'Home',
        path:'/dashboard',
        submenu:[]
    },
    {
        label:'صفحات',
        icon:'Buy',
        path:'/',
        submenu:[
            {
                title:'ورود',
                icon:'Buy',
                path:'/'
            },
            {
                title:'ثبت نام',
                icon:'Buy',
                path:'/register'
            },
            {
                title:'404',
                icon:'Buy',
                path:'/404'
            },
            {
                title:'500',
                icon:'Buy',
                path:'/500'
            },

           
        ]
    },
    {
        label:'سفارشات',
        icon:'Document',
        path:'/store/orders',
        submenu:[]
    },
   
    {
        label:'مشتریان',
        icon:'People',
        path:'/store/customers',
        submenu:[]
    },
    {
        label:'مالی',
        icon:'Wallet',
        path:'/store/financial',
        submenu:[]
    },
    // {
    //     label:'دنبال شوندگان',
    //     icon:'Heart',
    //     path:'/store/following',
    //     submenu:[]
    // },
    {
        label:'دنبال کنندگان',
        icon:'Heart2',
        path:'/store/followers',
        submenu:[]
    },
    {
        label:'پیام ها',
        icon:'Message',
        path:'/store/messages',
        submenu:[]
    },
    {
        label:'نظرات',
        icon:'Chat',
        path:'/store/comments',
        submenu:[]
    },
    {
        label:'تنظیمات',
        icon:'Setting',
        path:'/store/setting',
        submenu:[]
    },
    {
        label:'سفارشات مرجوعی',
        icon:'Swap',
        path:'/store/returned',
        submenu:[]
    },
    

]