<template>
  <section class="space-y-4 max-w-prose text-center mx-auto">
    <h2 class="text-3xl font-semibold" style="color: #1F2937;">Sobre Mim</h2>
    <p class="text-left">Estou cursando Análise e Desenvolvimento de Sistemas na Unimar, atualmente estagiário de Front-end com Vue.js.</p>
    <h3 class="text-2xl font-medium" style="color: #1F2937;">Habilidades</h3>
    <ul class="list-disc list-inside text-left" style="color: #1F2937;">
      <li>JavaScript (ES6+)</li>
      <li>Vue 3 (Composition API)</li>
      <li>HTML5 & CSS3</li>
      <li>Git & GitHub</li>
    </ul>
    <h3 class="text-2xl font-medium" style="color: #1F2937;">Trajetória</h3>
    <p class="text-left">Passei pelos bastidores de bancos negociando dívidas, hoje codificando soluções para web.</p>
    <Timeline />
  </section>
</template>

<script setup>
import Timeline from '../components/Timeline.vue'
</script>
