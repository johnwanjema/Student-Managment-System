const dashboard = () => import('../components/dashboard');
const profile = () => import('../components/profile.vue');
const users = () => import('../components/user.vue');
const student = () => import('../components/student.vue');
const results = () => import('../components/results.vue');
const search = () => import('../components/search.vue');
const searchresults = () => import('../components/searchresults.vue');
const studentdetails = () => import('../components/studentdetails.vue');

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
        path: '/admin/users',
        component: users,
        name: 'users',
    },
    {
        path: '/admin/student',
        component: student,
        name: 'student',
    },
    {
        path: '/admin/results',
        component: results,
        name: 'results',
    },
    {
        path: '/admin/search',
        component: search,
        name: 'search',
    },
    {
        path: '/admin/searchresults',
        component: searchresults,
        name: 'searchresults',
    },
    {
        path: '/admin/studentdetails',
        component: studentdetails,
        name: 'studentdetails',
    },
]