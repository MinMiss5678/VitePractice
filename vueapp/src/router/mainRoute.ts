import type {RouteRecordRaw} from 'vue-router';

const mainRoute: RouteRecordRaw[] = [
    {path: '/', name: 'Home', component: () => import('@/views/Home.vue')},
]

export default mainRoute