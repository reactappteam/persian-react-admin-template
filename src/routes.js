import React from 'react';
const Dashboard = React.lazy(()=>import('./Pages/Dashboard/Dashboard'));

const routs =[
    { path: '/', exact: true, name: 'صفحه اصلی' },
    {path:'/dashboard',exact:true,name:"داشبورد",component:Dashboard},
]
export default routs;
