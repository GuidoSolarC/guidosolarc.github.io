<script setup lang="ts">
import { ref, computed } from 'vue';
import { FolderGit2 } from 'lucide-vue-next';
import MaterialChip from '../common/MaterialChip.vue';
import MaterialCard from '../common/MaterialCard.vue';
import { projects } from '../../data/cvData';

const selectedCategory = ref<string>('all');

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'fintech', label: 'Finanzas' },
  { id: 'health', label: 'Salud' },
  { id: 'web', label: 'Web' },
];

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') return projects;
  return projects.filter((proj) => proj.category === selectedCategory.value);
});
</script>

<template>
  <section id="proyectos" class="py-16 border-t border-[#273e47]/10 dark:border-[#d8c99b]/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#bd632f] dark:text-[#d8973c] mb-1">
            <FolderGit2 class="w-3.5 h-3.5" />
            <span>Desarrollos</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-[#273e47] dark:text-[#f1ede4]">
            Proyectos Destacados
          </h2>
          <p class="text-sm text-[#273e47]/75 dark:text-[#f1ede4]/75 mt-1 max-w-xl">
            Soluciones construidas para responder a requerimientos reales de negocio y modernización de plataformas.
          </p>
        </div>

        <!-- Filter Chips -->
        <div class="flex flex-wrap items-center gap-1.5 p-1 bg-[#d8c99b]/15 dark:bg-[#1a2327] rounded-xl border border-[#273e47]/10 dark:border-[#d8c99b]/10">
          <MaterialChip
            v-for="cat in categories"
            :key="cat.id"
            :label="cat.label"
            :selected="selectedCategory === cat.id"
            @click="selectedCategory = cat.id"
          />
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <MaterialCard
          v-for="project in filteredProjects"
          :key="project.id"
          variant="outlined"
          class="flex flex-col justify-between"
        >
          <div class="space-y-3">
            <div class="flex items-center justify-between gap-2 text-xs font-mono text-[#bd632f] dark:text-[#d8973c]">
              <span>{{ project.companyContext }}</span>
              <span>{{ project.role }}</span>
            </div>

            <h3 class="text-base sm:text-lg font-bold text-[#273e47] dark:text-[#f1ede4]">
              {{ project.title }}
            </h3>

            <p class="text-xs sm:text-sm text-[#273e47]/80 dark:text-[#f1ede4]/80 leading-relaxed">
              {{ project.description }}
            </p>

            <div class="pt-1 text-xs text-[#273e47]/70 dark:text-[#f1ede4]/70">
              <span class="font-semibold text-[#273e47] dark:text-[#f1ede4]">Impacto: </span>
              <span>{{ project.impact }}</span>
            </div>
          </div>

          <!-- Technologies footer -->
          <div class="mt-5 pt-3 border-t border-[#273e47]/10 dark:border-[#d8c99b]/10">
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2 py-0.5 rounded text-[11px] font-mono bg-[#273e47]/5 dark:bg-[#d8c99b]/10 text-[#273e47] dark:text-[#f1ede4]"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </MaterialCard>
      </div>
    </div>
  </section>
</template>
