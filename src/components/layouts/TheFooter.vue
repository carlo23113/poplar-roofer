<template>
  <v-footer>
    <div class="footer-container">
      <div>
        <img
          id="logo"
          src="https://davidwhiteroofs.co.uk/wp-content/uploads/2022/08/Logo-2.png"
        />
      </div>
      <div>
        <div class="title">Our Services</div>
        <ul>
          <li>Roof Repair</li>
          <li>Roof Cleaning</li>
          <li>Gutter Cleaning</li>
        </ul>
      </div>
      <div>
        <div class="title">Contact Us</div>
        <ul>
          <li>+123 456 789</li>
          <li>email@email.com</li>
          <li>#3 Address street, Sample City 1234</li>
        </ul>
      </div>
    </div>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "the-footer",
});
</script>

<style lang="scss" scoped>
.v-footer {
  padding: 5px !important;
  width: 100vw;
  background-color: var(--primary);
}

.footer-container {
  width: 1024px;
  max-width: 1024px;
  padding: 3rem 0;
  margin: auto;
  position: relative;
  display: grid;
  grid-template-columns: 33% 33% 33%;

  div {
    color: white;
  }
}

.title {
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 1rem;
}

ul {
  li {
    list-style: none;
    color: white;
    font-weight: 300;
    margin-bottom: 0.3rem;
  }
}

#logo {
  width: 8rem;
}
</style>
