import { appStore } from "./modules/app";
import { routerStore } from "./modules/router";

const store: any = {};

export const registerStore = () => {
  store.appStore = appStore();
  store.routerStore = routerStore();
};

export default store;
