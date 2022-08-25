import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import { pathToCamel } from "@/utils/tool";

import Layout from "@/layout/index.vue";

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/404",
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/",
    component: Layout,
    meta: {
      icon: "icon-home",
      title: "系统管理",
    },
    children: [
      {
        path: "home",
        component: () => import("@/views/home/home.vue"),
        meta: {
          icon: "icon-home",
          title: "首页",
        },
      },
    ],
  },
];

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    meta: {
      icon: "icon-home",
      title: "系统管理",
    },
    children: [
      {
        path: "home",
        component: () => import("@/views/home/home.vue"),
        meta: {
          icon: "icon-home",
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/menu",
    component: Layout,
    meta: {
      icon: "icon-home",
      title: "菜单管理",
    },
    children: [
      {
        path: "",
        component: () => import("@/views/menu/index.vue"),
        meta: {
          icon: "icon-home",
          title: "菜单",
        },
      },
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});
