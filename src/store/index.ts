import { appStore } from "./modules/app";
import { routerStore } from "./modules/router";
import { userStore } from "./modules/user";

const store: any = {};

export const registerStore = () => {
  store.appStore = appStore();
  store.routerStore = routerStore();
  store.userStore = userStore();
};

export default store;
