<template>
  <div class="w-full bg-center bg-no-repeat bg-cover" :style="heroImage" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      heroImage: {
        backgroundImage: `url(${require('@/assets/img/photo_hero.jpg')})`,
        height: '60vh',
      },
    }
  },
})
</script>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
