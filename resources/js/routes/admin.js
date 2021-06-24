const dashboard = () => import('../components/dashboard');
const profile = () => import('../components/profile');
const students = () => import('../components/user');
const results = () => import('../components/results');
const search = () => import('../components/search');
const searchresults = () => import('../components/searchresults');
const studentdetails = () => import('../components/studentdetails');
const classes = () => import('../components/classes');

export default [
    { path: '/admin', redirect: { name: 'dashboard' }},
    {
        path: '/admin/dashboard',
        component: dashboard,
        name: 'dashboard',
    },
    {
        path: '/admin/profile',
        component: profile,
        name: 'profile',
    },
    {
        path: '/admin/students',
        component: students,
        name: 'students',
    },
    {
        path: '/admin/results',
        component: results,
        name: 'results',
    },
    {
        path: '/admin/studentdetails',
        component: studentdetails,
        name: 'studentdetails',
    },
    {
        path: '/admin/classes',
        component: classes,
        name: 'classes',
    },
]