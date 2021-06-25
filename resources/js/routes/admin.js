const dashboard = () => import('../components/dashboard');
const profile = () => import('../components/profile');
const students = () => import('../components/user');
const results = () => import('../components/results');
const studentdetails = () => import('../components/studentdetails');
const classes = () => import('../components/classes');
const example = () => import('../components/example');

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
    {
        path: '/admin/example',
        component: example,
        name: 'example',
    },
]