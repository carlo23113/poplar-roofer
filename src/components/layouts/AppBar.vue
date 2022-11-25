<template>
  <v-app-bar
    :class="['nav-bar', !isOnTop ? 'hidden' : '']"
    :elevation="0"
    height="84"
    collapse-on-scroll
  >
    <div class="appbar-container" id="app-bar">
      <!-- <v-btn icon size="small" @click="toggleSidebar()">
          <v-icon size="x-large">mdi-menu</v-icon>
        </v-btn> -->
      <div>
        <img
          id="logo"
          src="https://davidwhiteroofs.co.uk/wp-content/uploads/2022/08/Logo-2.png"
        />
      </div>
      <!-- <img id="logo" src="@/assets/images/logo.png" /> -->
      <div id="nav-links">
        <router-link
          :class="[
            route.name === link.name ? 'active' : '',
            link.title === 'Contact Us' ? 'primary-btn' : '',
          ]"
          v-for="(link, i) in navLinks"
          :key="i"
          :to="link.route"
          >{{ link.title }}</router-link
        >
      </div>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { emitter } from "@/main";
import { useTheme } from "vuetify";
import { useLayoutStore } from "@/stores/layout";
import { NavLink } from "@/types/layout";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "app-bar",
});
</script>

<script setup lang="ts">
const theme = useTheme();
const store = useLayoutStore();
const route = useRoute();

const navLinks: Array<NavLink> = store.navLinks;
let isOnTop = ref(true);

onMounted(() => {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      isOnTop.value = false;
    } else {
      isOnTop.value = true;
    }
  });
});

const toggleSidebar = () => {
  emitter.emit("toggle-sidebar");
  // toggleTheme();
};

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};
</script>

<style lang="scss" scoped>
.appbar-container {
  max-width: 1024px;
  margin: auto;
}

.nav-bar {
  display: block;
  transition: display 2s;
}

.hidden {
  display: none;
}

a {
  font-size: 1.25em;
  text-decoration: none;
  transition: color 0.3s;
  font-weight: 500;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--primary);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    color: var(--primary);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
}

.active {
  color: var(--primary);

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(1);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--primary);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
}

#app-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#logo {
  width: 100px;
}

#nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}
</style>
