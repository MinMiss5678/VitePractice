import type {RouteRecordRaw} from 'vue-router';

const mainRoute: RouteRecordRaw[] = [
    {path: '/', name: 'Home', component: () => import('@/components/views/Home.vue')},
]

export default mainRoute