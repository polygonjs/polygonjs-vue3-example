<template>
  <div class="about">
    <h1>Learn more about Polygonjs</h1>
    <p><a :href="polygonjsUrl" target="_blank">Polygonjs</a></p>
    <p><a :href="githubUrl" target="_blank">Github</a></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "about",
  setup() {

    const polygonjsUrl = computed(()=>'https://polygonjs.com')
    const githubUrl = computed(()=>'https://github.com/polygonjs/polygonjs-vue3')

    return {
      polygonjsUrl,
      githubUrl
    };
  },
});
</script>


<style>
a {cursor: pointer;}
</style>