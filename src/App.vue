<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

const a = 10;
const number = 10;
console.log(
  "loremasdasdasdasdasdasdasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
);
// npm install -D postcss postcss-html postcss-scss stylelint stylelint-config-recommended stylelint-config-recommended-scss stylelint-config-recommended-vue stylelint-config-recess-order stylelint-config-html stylelint-prettier
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  transition: filter 300ms;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

/* 测试stylelint */
.container {
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>
