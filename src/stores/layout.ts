import { NavLink } from "@/types/layout";
import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", {
  state: () => ({
    navLinks: navLinks as Array<NavLink>,
    sidebar: false as boolean,
  }),
  actions: {},
  getters: {},
});

const navLinks: Array<NavLink> = [
  {
    icon: "mdi-view-dashboard",
    route: "/",
    name: "home",
    title: "Home",
  },
  {
    icon: "mdi-view-dashboard",
    route: "/services",
    name: "services",
    title: "Services",
  },
  {
    icon: "mdi-view-dashboard",
    route: "/gallery",
    name: "gallery",
    title: "Gallery",
  },
  {
    icon: "mdi-view-dashboard",
    route: "/reviews",
    name: "reviews",
    title: "Reviews",
  },
  {
    icon: "mdi-view-dashboard",
    route: "/contact",
    name: "contact",
    title: "Contact Us",
  },
];
