import Vue from 'vue'
import VueRouter from 'vue-router'
import admin from './routes/admin';

Vue.use(VueRouter);


export default new VueRouter({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => ({ y: 0 }), // scroll to page top
    routes: [
        ...admin,
    ],
});