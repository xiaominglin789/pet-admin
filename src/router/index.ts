import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

/** 基本路由 */
const staticRoutes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@views/user/login.vue"),
		meta: {
			title: "登录"
		}
	},
	{
		path: "/404",
		name: "nofound",
		component: () => import("@views/empty/404.vue"),
		meta: {
			title: "找不到页面"
		}
	},
	{
		path: "/home",
		name: "home",
		component: () => import("@views/home/index.vue")
	},
	{
		path: "/user",
		name: "user",
		component: () => import("@views/user/index.vue")
	},
	{
		path: "/test",
		name: "test",
		component: () => import("@views/test/index.vue")
	}
];

const router = createRouter({
    history: createWebHistory(),
    routes: staticRoutes,
});

export default router;
