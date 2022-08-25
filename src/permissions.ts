import router from "./router";
import store from "./store";

router.beforeEach(async (to, from, next) => {
  const asyncRoutes = await store.routerStore.getMenuRoutes();
  console.log(asyncRoutes);

  //   router.addRoute(asyncRoutes);
  next();
  //   next({ ...to, replace: true });
});
