<script setup lang="ts">
import { ref, computed } from 'vue';
import { Code2, Search } from 'lucide-vue-next';
import MaterialChip from '../common/MaterialChip.vue';
import MaterialCard from '../common/MaterialCard.vue';
import { skillsList } from '../../data/cvData';
import { SkillCategory, SkillItem } from '../../types/portfolio';

const activeCategory = ref<SkillCategory>('all');
const searchQuery = ref('');

const categories: { id: SkillCategory; label: string }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'ai-tools', label: 'Herramientas IA' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'devops', label: 'DevOps' },
  { id: 'management', label: 'Gestión & Metodologías' },
  { id: 'db', label: 'Bases de Datos' }
];

const filteredSkills = computed(() => {
  return skillsList.filter((skill: SkillItem) => {
    const matchesCategory = activeCategory.value === 'all' || skill.category === activeCategory.value;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});
</script>

<template>
  <section id="habilidades" class="py-16 border-t border-[#273e47]/10 dark:border-[#d8c99b]/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#bd632f] dark:text-[#d8973c] mb-1">
            <Code2 class="w-3.5 h-3.5" />
            <span>Stack Tecnológico</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-[#273e47] dark:text-[#f1ede4]">
            Tecnologías y Herramientas
          </h2>
          <p class="text-sm text-[#273e47]/75 dark:text-[#f1ede4]/75 mt-1 max-w-xl">
            Lenguajes, frameworks y entornos utilizados en el desarrollo y despliegue de soluciones de software.
          </p>
        </div>

        <!-- Search Input -->
        <div class="relative w-full sm:w-60">
          <Search class="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#273e47]/50 dark:text-[#d8c99b]/50" />
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Filtrar por nombre..."
            class="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-white dark:bg-[#1a2327] border border-[#273e47]/20 dark:border-[#d8c99b]/20 text-[#273e47] dark:text-[#f1ede4] placeholder-[#273e47]/40 dark:placeholder-[#d8c99b]/40 focus:outline-none focus:border-[#a4243b] dark:focus:border-[#d8973c] transition-colors"
          />
        </div>
      </div>

      <!-- Category filter chips -->
      <div class="flex flex-wrap items-center gap-1.5 p-1 bg-[#d8c99b]/15 dark:bg-[#1a2327] rounded-xl border border-[#273e47]/10 dark:border-[#d8c99b]/10 mb-6 w-fit">
        <MaterialChip
          v-for="cat in categories"
          :key="cat.id"
          :label="cat.label"
          :selected="activeCategory === cat.id"
          @click="activeCategory = cat.id"
        />
      </div>

      <!-- Skills Grid (No levels) -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        <MaterialCard
          v-for="skill in filteredSkills"
          :key="skill.name"
          variant="outlined"
          class="p-3.5 flex items-center justify-between hover:border-[#273e47]/30 dark:hover:border-[#d8c99b]/30 transition-colors"
        >
          <span class="text-xs sm:text-sm font-semibold text-[#273e47] dark:text-[#f1ede4]">
            {{ skill.name }}
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-[#bd632f]/60 dark:bg-[#d8973c]/60" />
        </MaterialCard>
      </div>

      <div v-if="filteredSkills.length === 0" class="text-center py-12 text-[#273e47]/60 dark:text-[#f1ede4]/60 text-xs">
        No se encontraron coincidencias para "{{ searchQuery }}".
      </div>
    </div>
  </section>
</template>
