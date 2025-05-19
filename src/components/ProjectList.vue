<template>
  <div class="mt-6">
    <h2 class="text-2xl font-semibold mb-2" style="color: #1F2937;">Projetos</h2>
    <ul class="space-y-2">
      <li v-for="p in projects" :key="p.id" class="border p-2 rounded hover:shadow">
        <h4 class="font-medium">{{ p.name }}</h4>
        <p class="text-sm">{{ p.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    name: 'CRUD de Cadastro de Livros',
    description:
      'Aplicação em Vue 3 + Composition API + Tailwind para gerenciar cadastro, edição e exclusão de livros.',
  },
  {
    id: 2,
    name: 'SPA de Treinamentos LGPD',
    description:
      'Protótipo de plataforma de cursos internos, com roteamento Vue Router e layout responsivo em Tailwind.',
  },
  {
    id: 3,
    name: 'Dashboard de Suporte ao Cliente',
    description:
      'Mockup em Vue que simula interface de tickets, filtros e gráficos simples de atendimentos.',
  },
  {
    id: 4,
    name: 'Blog Pessoal (estudo)',
    description:
      'Projeto full-stack leve usando Vue no front e JSON local, para publicar posts e comentários.',
  },
])
</script>
