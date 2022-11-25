<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="sidebar"
    permanent
    border="none"
    width="220"
    :color="theme.global.name.value === 'dark' ? '#0F0E0E' : '#FFFFFF'"
    style="position: fixed"
  >
    <v-list density="compact" nav>
      <v-list-subheader>Menu</v-list-subheader>
      <v-list-item
        v-for="(nav, i) in navLinks"
        :key="i"
        :prepend-icon="nav.icon"
        :title="nav.title"
        :to="nav.route"
        @click.stop="$emit('click', nav)"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-logout"
        title="Log Out"
        style="margin-top: auto"
        @click="logout()"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { NavLink } from "@/types/layout";
import { useRouter } from "vue-router";
import { emitter } from "@/main";
import { useTheme } from "vuetify";

export default defineComponent({
  name: "nav-sidebar",
});
</script>

<script setup lang="ts">
const theme = useTheme();

defineProps({
  navLinks: {
    type: Array<NavLink>,
    required: true,
  },
});

const router = useRouter();

let drawer = ref(true);
let sidebar = ref(false);

onMounted(() => {
  emitter.on("toggle-sidebar", () => {
    sidebar.value = !sidebar.value;
  });
});

const logout = () => {
  router.push("/login");
};
</script>
