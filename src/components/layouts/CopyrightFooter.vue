<template>
  <v-footer>
    <div class="footer-container">
      <div id="copyright">
        ©️ 2022 Poplar Roofer Roof Repairs Flat Roofing Gutter Cleaning and
        Commercial
      </div>
    </div>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "copyright-footer",
});
</script>

<style lang="scss" scoped>
.v-footer {
  padding: 5px !important;
  width: 100vw;
}

.footer-container {
  width: 1024px;
  max-width: 1024px;
  padding: 0.4rem 0;
  margin: auto;
}

#copyright {
  font-size: 0.8em;
  font-weight: 600;
}
</style>
