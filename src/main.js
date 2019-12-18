import DefaultLayout from "~/layouts/Default.vue";

//global stylesheet
import "~/assets/style/styles.scss";
import VueMasonry from "vue-masonry-css";
export default function(Vue, { head }) {
  Vue.use(VueMasonry);

  Vue.component("Layout", DefaultLayout);

  head.link.push({
    rel: "stylesheet",
    href: encodeURI(
      "https://fonts.googleapis.com/css?family=Libre+Franklin:300,400,400i,600,700&display=swap"
    )
  });
}
