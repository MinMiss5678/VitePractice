import type {RouteRecordRaw} from 'vue-router';

const otherRoute: RouteRecordRaw[] = [
    {path: '/my/:id', name: 'My', component: () => import('@/views/My.vue')}
]

export default otherRoute