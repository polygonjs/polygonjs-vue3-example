<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="wrapper">
      <div class="box text text-right">In this page, we show how to load multiple scenes together</div>
      <div class="box"><Scene01/></div>
      <div class="box"><Scene02/></div>
      <div class="box text text-left">
        And you can also visit each scene separately, using the links at the top of the page, or here: 
      <nav>
        <router-link to="/scene_01">Scene 01</router-link> |
        <router-link to="/scene_02">Scene 02</router-link> |
        <router-link to="/scene_03">Scene 03</router-link>
      </nav>
      </div>
      <div class="box text text-right">And you can even play music on the piano</div>
      <div class="box"><Scene03/></div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Scene01 from '../views/Scene01.vue'
import Scene02 from '../views/Scene02.vue'
import Scene03 from '../views/Scene03.vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    Scene01,
    Scene02,
    Scene03,
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* grid */
.wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 10px;
  background-color: #fff;
  color: #444;
}

.box {
  padding: 2px;
}
.box.text {
  padding-top: 20px;
}
.box.text-left {
  text-align: left;
}
.box.text-right {
  text-align: right;
}



</style>
