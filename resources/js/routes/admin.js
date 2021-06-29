const dashboard = () => import('../components/dashboard');
const profile = () => import('../components/profile');
const students = () => import('../components/students');
const results = () => import('../components/results');
const classes = () => import('../components/classes');
const example = () => import('../components/example');
const fullCalender = () => import('../components/fullCalendar');

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
        path: '/admin/classes',
        component: classes,
        name: 'classes',
    },
    {
        path: '/admin/example',
        component: example,
        name: 'example',
    },
    {
        path: '/admin/fullCalender',
        component: fullCalender,
        name: 'fullCalender',
    },
]