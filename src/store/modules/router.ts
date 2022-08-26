import { defineStore } from "pinia";
import { asyncRoutes } from "@/router";
import { RouteRecordRaw } from "vue-router";

export const routerStore = defineStore("routerStore", {
  state: () => ({
    menuRoutes: [] as Array<RouteRecordRaw>,
  }),
  actions: {
    getMenuRoutes() {
      this.menuRoutes = asyncRoutes;
      return asyncRoutes;
    },
  },
});
