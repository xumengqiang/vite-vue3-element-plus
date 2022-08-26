import router from "./router";
import store from "./store";
import { RouteRecordRaw } from "vue-router";

// 白名单列表
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  if (store.userStore.token) {
    if (to.path === "/login") {
      next("/home");
    } else {
      if (!store.userStore.user.id) {
        await store.userStore.getUserInfoAction();
        const asyncRoutes = await store.routerStore.getMenuRoutes();
        asyncRoutes.forEach((route: RouteRecordRaw) => {
          router.addRoute(route);
        });
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
