<template>
  <div id="app">
    <Shiritori />
  </div>
</template>

<script>
import Shiritori from './components/Shiritori.vue';

export default {
  name: 'app',
  components: {
    Shiritori,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
