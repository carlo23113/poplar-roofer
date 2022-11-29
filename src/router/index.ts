import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/main.vue";
import BlankLayout from "@/layouts/blank.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/services",
      name: "services",
      component: () => import("@/views/services.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("@/views/gallery.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/reviews",
      name: "reviews",
      component: () => import("@/views/reviews.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/contact.vue"),
      meta: {
        layout: MainLayout,
      },
    },
  ],
});

export default router;
