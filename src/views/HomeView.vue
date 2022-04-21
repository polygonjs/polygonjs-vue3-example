<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_vue.png">
    <img alt="Vue logo" src="../assets/logo_polygonjs.png">
    <HelloWorld msg="Welcome to Your Vue.js + Polygonjs App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
