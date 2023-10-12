import {createRouter, createWebHistory} from 'vue-router'
import type {RouterOptions, Router, RouteRecordRaw} from 'vue-router'
// import mainRoute from './mainRoute';
// import otherRoute from './otherRoute';
const metaRouters = import.meta.glob<RouteRecordRaw[]>("../router/*.ts");
const routerArray: RouteRecordRaw[] = [];
for (const key of Object.values(metaRouters)) {
    const mod:RouteRecordRaw[] = await key();
    routerArray.push(...mod.default);
}

// const routes: RouteRecordRaw[] = [
//     ...mainRoute,
//     ...otherRoute
// ]

const options: RouterOptions = {
    history: createWebHistory(),
    routes: [
        ...routerArray
    ]
}

const router: Router = createRouter(options)

export default router;