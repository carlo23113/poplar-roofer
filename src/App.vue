<template>
  <v-app full-height>
    <component :is="$route.meta.layout || 'div'">
      <RouterView />
    </component>
  </v-app>
</template>
