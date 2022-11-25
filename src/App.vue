<template>
  <v-app full-height>
    <v-main>
      <component :is="$route.meta.layout || 'div'">
        <RouterView />
      </component>
    </v-main>
  </v-app>
</template>
