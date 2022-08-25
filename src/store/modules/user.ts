import { defineStore } from "pinia";

import cache from "@/utils/cache";

export const userStore = defineStore("userStore", {
  state: () => ({
    user: {
      id: "",
    },
    token: cache.getToken(),
  }),
  actions: {
    loginAction() {
      this.token = "XXXXXXXXXXXXX";
      cache.setToken("XXXXXXXXXXXXX");
    },
    getUserInfoAction() {
      this.user.id = "1";
    },
  },
});
