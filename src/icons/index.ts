import svgIcon from "@/components/SvgIcon/index.vue";

export default {
  install(app: any) {
    app.component("svg-icon", svgIcon);
  },
};
