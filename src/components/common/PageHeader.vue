<template>
  <div class="page-header-container">
    <div class="section-title">
      {{ header.toUpperCase() }}
    </div>
  </div>
</template>

<script lang="ts">
import { stringify } from "querystring";
import { defineComponent } from "vue";

export default defineComponent({
  name: "page-header",
});
</script>

<script setup lang="ts">
defineProps({
  header: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.page-header-container {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 2rem 0 5rem;
  justify-content: center;
}

.vertical-line {
  height: 40px;
  width: 5px;
  background-color: var(--primary);
  margin-right: 10px;
}
</style>
