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
});
