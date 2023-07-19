import Vue from 'vue';
import storeLocal from 'storejs';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: ()=>import("../views/HomeIndex.vue"),
        meta: {
            title: 'homepage11',
            requiresAuth: false
        },
    }

];

const router = new VueRouter({
    mode: 'history',
    //base: process.env.NODE_ENV === "production" ? "/admin/" : "/",
    base: '/dddfff11/dfvideo/dist/',
    routes
});

router.beforeEach((to, from, next) => {
    // console.log('to',to);
    // console.log('from',from);
    // console.log('router.beforeEach');

    const token = storeLocal.get('token');
    const title = to.meta.title;
    const requiresAuth = to.meta.requiresAuth;

    if(title) {
        document.title = title;
    }else {
        document.title = 'ddd';
    }

    if (requiresAuth) {
        if (token === null || token === '' || token === undefined){
            next('/login');
        }else {
            next();
        }
    } else {
        next();
    }
});

export default router
