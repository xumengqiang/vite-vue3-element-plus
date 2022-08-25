import router from "./router";
import store from "./store";

// 白名单列表
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  console.log("permiss");
  console.log(store.userStore.token);

  if (store.userStore.token) {
    if (to.path === "/login") {
      next("/home");
    } else {
      if (!store.userStore.user.id) {
        await store.userStore.getUserInfoAction();
        const asyncRoutes = await store.routerStore.getMenuRoutes();
        router.addRoute(asyncRoutes);
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
