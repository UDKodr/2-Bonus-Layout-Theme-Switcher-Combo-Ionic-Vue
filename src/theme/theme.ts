import { reactive } from "vue";

export const store = reactive({
  mainScreenLayout: localStorage.getItem("mainScreenLayout"),
  listScreenLayout: localStorage.getItem("listScreenLayout"),
  theme: localStorage.getItem("themeSet"),
  
  // / theme: ref("darkOrange"),
  setItem(): void {
    //    localStorage.setItem("themeSet", "darkOrange");
    this.theme = localStorage.getItem("themeSet");
  },
  setLayouts() {
    //    localStorage.setItem("themeSet", "darkOrange");
    this.mainScreenLayout = localStorage.getItem("mainScreenLayout");
    this.listScreenLayout = localStorage.getItem("listScreenLayout");
  },
});