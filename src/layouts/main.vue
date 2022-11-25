<template>
  <v-app>
    <v-layout>
      <app-bar :current-title="currentTitle" style="position: fixed"></app-bar>

      <!-- <nav-sidebar
              :nav-links="navLinks"
              @click="onClickNav($event)"
            ></nav-sidebar> -->
      <v-main>
        <div>
          <slot />
        </div>
      </v-main>
    </v-layout>
    <v-layout>
      <the-footer></the-footer>
    </v-layout>
    <v-layout>
      <copyright-footer></copyright-footer>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import NavSidebar from "@/components/layouts/NavSidebar.vue";
import { defineComponent, ref } from "vue";
import { NavLink } from "@/types/layout";
import { useLayoutStore } from "@/stores/layout";

export default defineComponent({
  name: "main-layout",
});
</script>

<script setup lang="ts">
import AppBar from "@/components/layouts/AppBar.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import CopyrightFooter from "@/components/layouts/CopyrightFooter.vue";

const layoutStore = useLayoutStore();
const navLinks = layoutStore.navLinks;
let currentTitle = ref("Dashboard");

const onClickNav = (data: NavLink) => {
  if (data.title) {
    currentTitle.value = data.title;
  }
};
</script>
