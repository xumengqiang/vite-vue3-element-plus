import { defineStore } from "pinia";
import { ITheme } from "@/store/theme/interface";
import cache from "@/utils/cache";

export const appStore = defineStore("appStore", {
  state: () => ({
    // sidebar 是否展开
    sidebarOpened: cache.getSidebarOpened(),
    // 组件大小
    componentSize: cache.getComponentSize(),
    // 主题
    theme: cache.getTheme(),
  }),
  actions: {
    setSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened;
      cache.setSidebarOpened(this.sidebarOpened);
    },
    setComponentSize(size: string) {
      this.componentSize = size;
      cache.setComponentSize(size);
    },
    setTheme(theme: ITheme) {
      this.theme = theme;
      cache.setTheme(theme);
    },
  },
});
