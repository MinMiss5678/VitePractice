import {createRouter, createWebHistory} from 'vue-router'
import type {RouterOptions, Router, RouteRecordRaw} from 'vue-router';
import mainRoute from './mainRoute';
import otherRoute from './otherRoute';

const routes: RouteRecordRaw[] = [
    ...mainRoute,
    ...otherRoute
]

const options: RouterOptions = {
    history: createWebHistory(),
    routes
}

const router: Router = createRouter(options)

export default router;