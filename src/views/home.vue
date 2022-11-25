<template>
  <section id="home">
    <div class="container">
      <div id="highlights">
        <div id="text">Sample Text</div>
        <button class="primary-btn" size="large">Sample Button</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "home",
});
</script>

<style lang="scss" scoped>
#home {
  background-image: url("https://i0.wp.com/davidwhiteroofs.co.uk/wp-content/uploads/2022/07/homepage-banner-stripe-1.png?w=1600&ssl=1");
  background-size: cover;
}

#highlights {
  position: absolute;
  top: 35%;
  width: 50%;

  #text {
    color: white;
    font-size: 4em;
    margin-left: auto;
    font-weight: bolder;
  }
}
</style>
