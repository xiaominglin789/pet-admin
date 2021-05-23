import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

/** 基本路由 */
const staticRoutes: Array<RouteRecordRaw> = [
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/user/login.vue"),
		meta: {
			title: "登录"
		}
	},
	{
		path: "/404",
		name: "nofound",
		component: () => import("@/views/empty/404.vue"),
		meta: {
			title: "找不到页面"
		}
	}
];

const router = createRouter({
    history: createWebHistory(),
    routes: staticRoutes,
});

export default router;
