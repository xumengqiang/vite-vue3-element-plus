import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layout/index.vue");

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/redirect",
    component: Layout,
    children: [
      {
        path: ":path(.*)",
        component: () => import("@/views/redirect/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/404",
    component: () => import("@/views/404.vue"),
  },
];

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("@/views/home/home.vue"),
        meta: {
          icon: "icon-home",
          title: "首页",
          affix: true,
        },
      },
    ],
  },
  {
    path: "/system",
    component: Layout,
    redirect: "/system/menu",
    meta: {
      icon: "icon-home",
      title: "系统管理",
    },
    children: [
      {
        path: "menu",
        component: () => import("@/views/system/menu.vue"),
        meta: {
          icon: "icon-home",
          title: "菜单管理",
        },
      },
      {
        path: "user",
        component: () => import("@/views/system/user.vue"),
        meta: {
          icon: "icon-home",
          title: "用户管理",
        },
      },
      {
        path: "org",
        component: () => import("@/views/system/org.vue"),
        meta: {
          icon: "icon-home",
          title: "机构管理",
        },
      },
      {
        path: "role",
        component: () => import("@/views/system/role.vue"),
        meta: {
          icon: "icon-home",
          title: "角色管理",
        },
      },
      {
        path: "post",
        component: () => import("@/views/system/post.vue"),
        meta: {
          icon: "icon-home",
          title: "岗位管理",
        },
      },
    ],
  },
  {
    path: "/chart",
    component: Layout,
    redirect: "/chart/AreaStack",
    meta: {
      icon: "icon-home",
      title: "图表",
    },
    children: [
      {
        path: "AreaStack",
        component: () => import("@/views/chart/AreaStack.vue"),
        meta: {
          icon: "icon-home",
          title: "堆叠面积图",
        },
      },
      {
        path: "CategoryStack",
        component: () => import("@/views/chart/CategoryStack.vue"),
        meta: {
          icon: "icon-home",
          title: "虚线柱状图",
        },
      },
      {
        path: "Candlestick",
        component: () => import("@/views/chart/Candlestick.vue"),
        meta: {
          icon: "icon-home",
          title: "上证指数图",
        },
      },
    ],
  },
  {
    path: "/editor",
    component: Layout,
    redirect: "/editor/WangEditor",
    meta: {
      icon: "icon-home",
      title: "编辑器",
    },
    children: [
      {
        path: "WangEditor",
        component: () => import("@/views/editor/WangEditor.vue"),
        meta: {
          icon: "icon-home",
          title: "富文本编辑器",
        },
      },
      {
        path: "MdEditor",
        component: () => import("@/views/editor/MdEditor.vue"),
        meta: {
          icon: "icon-home",
          title: "Markdown编辑器",
        },
      },
    ],
  },
  {
    path: "/nested",
    component: Layout,
    redirect: "/nested/menu1",
    meta: {
      icon: "icon-home",
      title: "多级菜单",
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index.vue"),
        redirect: "/nested/menu1/menu1-1",
        meta: {
          icon: "icon-home",
          title: "Menu 1",
        },
        children: [
          {
            path: "menu1-1",
            component: () => import("@/views/nested/menu1/menu1-1/index.vue"),
            meta: {
              icon: "icon-home",
              title: "Menu 1-1",
            },
          },
          {
            path: "menu1-2",
            component: () => import("@/views/nested/menu1/menu1-2/index.vue"),
            redirect: "/nested/menu1/menu1-2/menu1-2-1",
            meta: {
              icon: "icon-home",
              title: "Menu 1-2",
            },
            children: [
              {
                path: "menu1-2-1",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-1/index.vue"),
                meta: {
                  icon: "icon-home",
                  title: "Menu 1-2-1",
                },
              },
              {
                path: "menu1-2-2",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-2/index.vue"),
                meta: {
                  icon: "icon-home",
                  title: "Menu 1-2-2",
                },
              },
            ],
          },
          {
            path: "menu1-3",
            component: () => import("@/views/nested/menu1/menu1-3/index.vue"),
            meta: {
              icon: "icon-home",
              title: "Menu 1-3",
            },
          },
        ],
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index.vue"),
        meta: {
          icon: "icon-home",
          title: "Menu 2",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
    meta: {
      hidden: true,
    },
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});
