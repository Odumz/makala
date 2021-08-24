    import { createRouter, createWebHistory } from 'vue-router'

    import home from '../components/home.vue'
    import about from '../components/about.vue'
    import movieList from '../components/movieList.vue'
    import dashboard from '../components/dashboard.vue'
    import userLogin from '../components/userLogin.vue'
    import test from '../views/test.vue'
    

    const routes = [
        {
            path: '/',
            name: 'Home',
            component: home,
        },
        {
            path: '/about',
            name: 'About',
            component: about,
        },
        {
            path: '/test',
            name: 'TestPage',
            component: test,
        },
        {
            path: '/movies',
            name: 'Movies',
            component: movieList,
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: dashboard,
        },
        {
            path: '/login',
            name: 'Login',
            component: userLogin,
        },
    ];

    const router = createRouter ({
        history: createWebHistory(),
        routes,
    });

    export default router