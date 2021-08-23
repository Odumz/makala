<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <!-- <test /> -->
  <Sidebar />
  <div class="p-4" :style="{'margin-left' : sidebarWidth}">
      <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import test from './views/test.vue'
import Sidebar from './components/sidebar/sidebar.vue'
import { sidebarWidth } from './components/sidebar/state'

export default {
  components: {
    Sidebar,
  },
  setup () {
    return { sidebarWidth }
  }
}


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.dark {
  background: #192734;
  color: #f3f3f3;
}
</style>
