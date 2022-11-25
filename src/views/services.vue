<template>
  <section>
    <div class="container">
      <page-header header="Services"></page-header>
      <div v-for="(service, i) in services" :key="i" class="service">
        <div class="service-info">
          <div class="service-title">
            <div>{{ service.title }}</div>
          </div>
          <p v-for="p in service.paragraphs" :key="p">
            {{ p }}
          </p>
        </div>
        <div class="service-image">
          <v-img class="image" :src="service.image" width="100%"></v-img>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useServicesStore } from "@/stores/services";

export default defineComponent({
  name: "services",
});
</script>

<script setup lang="ts">
import PageHeader from "@/components/common/PageHeader.vue";

const store = useServicesStore();

const services = store.services;
</script>

<style lang="scss" scoped>
.service {
  display: flex;
  align-items: flex-start;
  margin-bottom: 5rem;
  gap: 3rem;
}

.service-reverse {
  flex-direction: row-reverse;

  .service-title {
    float: right;
  }
}

.service-info {
  flex-basis: 55%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.service-title {
  font-size: 2em;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.service-image {
  flex-basis: 45%;
  display: flex;
  flex-direction: column;

  .image {
    margin-bottom: 1rem !important;
  }
}

p {
  text-align: justify;
}

.vertical-line {
  height: 40px;
  width: 5px;
  background-color: var(--primary);
}
</style>
