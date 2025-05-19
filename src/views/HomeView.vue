<template>
  <section class="space-y-4 text-center mx-auto max-w-prose">
    <img
      src="../assets/minhafoto.jpg"
      alt="Luan Alves"
      class="rounded-full w-32 h-32 mx-auto mb-4" style="max-width:200px; max-height:150px; width: auto; height: auto;">
    <h1 class="text-4xl font-bold" style="color: #1F2937;">Olá, eu sou o Luan!</h1>
    <p>Desenvolvedor Full Stack em formação, apaixonado por transformar café em código.</p>
    <ProjectList />
  </section>
</template>

<script setup>
import ProjectList from '../components/ProjectList.vue'
</script>
