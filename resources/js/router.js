import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/login',
            component: () => import('./components/Login'),
            name: 'login',
        },
        {
            path: '/register',
            component: () => import('./components/Register'),
            name: 'register',
        },
        {
            path: '/get',
            component: () => import('./components/GetInfo'),
            name: 'get.index',
        },

    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token')

    if (!token) {
        if (to.name === 'login' || to.name === 'register') {
            return next()
        } else {
            return  next({
                name: 'login'
            })
        }
    }

    if (to.name === 'login' || to.name === 'register' && token) {
        return next({
            name: 'get.index'
        })
    }

    next()
})

export default router
