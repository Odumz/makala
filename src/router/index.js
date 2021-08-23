    import { createRouter, createWebHistory } from 'vue-router'

    import home from '../components/home.vue'
    import about from '../components/about.vue'
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
    ];

    const router = createRouter ({
        history: createWebHistory(),
        routes,
    });

    export default router