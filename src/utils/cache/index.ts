import { SessionStorage, Storage } from "../storage";
import CacheKey from "./key";
import { ITheme } from "@/store/theme/interface";
import { themeConfig } from "@/store/theme/config";

// 缓存
class Cache {
  getToken = (): string => {
    return Storage.getItem(CacheKey.TokenKey) || "";
  };

  setToken = (value: string) => {
    Storage.setItem(CacheKey.TokenKey, value);
  };

  getSidebarOpened = (): boolean => {
    return Storage.getItem(CacheKey.SidebarOpenedKey) ?? true;
  };

  setSidebarOpened = (value: boolean) => {
    Storage.setItem(CacheKey.SidebarOpenedKey, value);
  };

  getComponentSize = (): string => {
    return Storage.getItem(CacheKey.ComponentSizeKey) ?? "default";
  };

  setComponentSize = (value: string) => {
    Storage.setItem(CacheKey.ComponentSizeKey, value);
  };

  getTheme = (): ITheme => {
    return (SessionStorage.getItem(CacheKey.ThemeKey) as ITheme) ?? themeConfig;
  };

  setTheme = (value: ITheme) => {
    SessionStorage.setItem(CacheKey.ThemeKey, value);
  };

  removeTheme = () => {
    SessionStorage.removeItem(CacheKey.ThemeKey);
  };
}

export default new Cache();
