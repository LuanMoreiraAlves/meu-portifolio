<template>
  <NavBar />
  <main class="p-6">
    <router-view />
  </main>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>
