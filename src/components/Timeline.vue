<template>
  <div class="mt-6">
    <h2 class="text-2xl font-semibold mb-4" style="color: #1F2937;" >Linha do Tempo</h2>
    <ul class="border-l-2 border-gray-300 pl-4">
      <li
        v-for="item in timeline"
        :key="item.date"
        class="mb-6 relative"
      >
        <div
          class="absolute -left-1.5 top-1 w-3 h-3 bg-blue-600 rounded-full"
        ></div>
        <div class="text-blue-600 font-medium">{{ item.date }}</div>
        <div class="font-semibold">{{ item.title }}</div>
        <div class="text-gray-700 text-sm">{{ item.description }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Baseado no seu currículo:
const timeline = ref([
  {
    date: '2022',
    title: 'Ensino Médio Completo',
    description:
      'Colégio Bezerra de Menezes – Conclusão do Ensino Médio.',
  },
  {
    date: '2023',
    title: 'Curso Desenvolvimento Web (Udemy)',
    description:
      'Formação completa em HTML, CSS, JavaScript e bibliotecas front-end.',
  },
  {
    date: 'Fev/2023 – Abr/2024',
    title: 'Operador de Telemarketing – Paschoalotto',
    description:
      'Negociação de dívidas no Banco PicPay e Bradesco. Desenvolvimento de inteligência emocional e estratégias de refinanciamento.',
  },
  {
    date: 'Set/2024 – Fev/2025',
    title: 'Estágio em Suporte & Sucesso do Cliente – DPOnet',
    description:
      'Suporte técnico, elaboração de manuais passo a passo e treinamentos internos sobre LGPD e segurança da informação.',
  },
  {
    date: '2023 – Presente',
    title: 'Graduação em ADS – Unimar',
    description:
      'Cursando Análise e Desenvolvimento de Sistemas na Universidade de Marília.',
  },
])
</script>
