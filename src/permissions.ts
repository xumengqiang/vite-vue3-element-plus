import router, { constantRoutes } from "./router";
import store from "./store";
import { RouteRecordRaw } from "vue-router";

// 白名单列表
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  if (store.userStore.token) {
    if (to.path === "/login") {
      next("/home");
    } else {
      // 用户信息不存在，则重新拉取用户等信息
      if (!store.userStore.user.id) {
        await store.userStore.getUserInfoAction();
        const asyncRoutes = await store.routerStore.getMenuRoutes();
        // 添加菜单路由
        asyncRoutes.forEach((route: RouteRecordRaw) => {
          router.addRoute(route);
        });
        // 保存路由数据
        store.routerStore.setRoutes(constantRoutes.concat(asyncRoutes));
        next({ ...to, replace: true });
      } else {
        next();
      }
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next("/login");
    }
  }
});
