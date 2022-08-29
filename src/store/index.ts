import { appStore } from "./modules/app";
import { routerStore } from "./modules/router";
import { userStore } from "./modules/user";
import { tabsStore } from "./modules/tabs";

const store: any = {};

export const registerStore = () => {
  store.appStore = appStore();
  store.routerStore = routerStore();
  store.userStore = userStore();
  store.tabsStore = tabsStore();
};

export default store;
