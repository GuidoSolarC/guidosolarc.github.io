<script setup lang="ts">
import { ref, computed } from 'vue';
import { Briefcase, Building, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-vue-next';
import MaterialChip from '../common/MaterialChip.vue';
import MaterialCard from '../common/MaterialCard.vue';
import { experiences } from '../../data/cvData';
import { ExperienceCategory } from '../../types/portfolio';

const activeFilter = ref<ExperienceCategory>('all');
const expandedId = ref<string | null>(experiences[0].id);

const filterOptions: { id: ExperienceCategory; label: string }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'ai-modernization', label: 'IA & Modernización' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Full Stack' },
];

const filteredExperiences = computed(() => {
  if (activeFilter.value === 'all') return experiences;
  return experiences.filter((exp) => exp.category === activeFilter.value);
});

const toggleExpand = (id: string) => {
  expandedId.value = expandedId.value === id ? null : id;
};
</script>

<template>
  <section id="experiencia" class="py-16 border-t border-[#273e47]/10 dark:border-[#d8c99b]/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#bd632f] dark:text-[#d8973c] mb-1">
            <Briefcase class="w-3.5 h-3.5" />
            <span>Trayectoria</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-[#273e47] dark:text-[#f1ede4]">
            Experiencia Laboral
          </h2>
          <p class="text-sm text-[#273e47]/75 dark:text-[#f1ede4]/75 mt-1 max-w-xl">
            Desarrollo de sistemas, modernización arquitectónica y optimización operativa en empresas del sector financiero, salud y digital.
          </p>
        </div>

        <!-- Filter chips -->
        <div class="flex flex-wrap items-center gap-1.5 p-1 bg-[#d8c99b]/15 dark:bg-[#1a2327] rounded-xl border border-[#273e47]/10 dark:border-[#d8c99b]/10">
          <MaterialChip
            v-for="opt in filterOptions"
            :key="opt.id"
            :label="opt.label"
            :selected="activeFilter === opt.id"
            @click="activeFilter = opt.id"
          />
        </div>
      </div>

      <!-- Timeline list -->
      <div class="space-y-4">
        <MaterialCard
          v-for="exp in filteredExperiences"
          :key="exp.id"
          variant="outlined"
          :class="[
            'transition-colors',
            exp.isCurrent ? 'border-[#a4243b]/40 dark:border-[#d8c99b]/40' : ''
          ]"
        >
          <div
            class="cursor-pointer select-none"
            @click="toggleExpand(exp.id)"
          >
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div class="flex items-center gap-2.5">
                  <h3 class="text-base sm:text-lg font-bold text-[#273e47] dark:text-[#f1ede4]">
                    {{ exp.role }}
                  </h3>
                  <span
                    v-if="exp.isCurrent"
                    class="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#a4243b] text-white"
                  >
                    ACTUAL
                  </span>
                </div>

                <div class="flex flex-wrap items-center gap-x-2 text-xs text-[#273e47]/70 dark:text-[#f1ede4]/70 mt-1">
                  <span class="font-semibold text-[#273e47] dark:text-[#f1ede4] inline-flex items-center gap-1">
                    <Building class="w-3.5 h-3.5 text-[#bd632f]" />
                    {{ exp.company }}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span class="inline-flex items-center gap-1">
                    <MapPin class="w-3.5 h-3.5 text-[#273e47]/40 dark:text-[#d8c99b]/40" />
                    {{ exp.location }} ({{ exp.modality }})
                  </span>
                </div>
              </div>

              <div class="flex items-center gap-3 shrink-0 text-xs text-[#273e47]/70 dark:text-[#f1ede4]/70 font-mono">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#273e47]/5 dark:bg-[#d8c99b]/10 text-current">
                  <Calendar class="w-3 h-3 text-[#bd632f]" />
                  {{ exp.startDate }} — {{ exp.endDate }}
                </span>
                <button
                  type="button"
                  :aria-label="expandedId === exp.id ? 'Contraer' : 'Expandir'"
                  class="p-1 rounded text-[#273e47]/60 dark:text-[#f1ede4]/60 hover:text-[#273e47] dark:hover:text-[#f1ede4]"
                >
                  <ChevronUp v-if="expandedId === exp.id" class="w-4 h-4" />
                  <ChevronDown v-else class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div
            v-if="expandedId === exp.id"
            class="mt-4 pt-4 border-t border-[#273e47]/10 dark:border-[#d8c99b]/10 space-y-4"
          >
            <ul class="space-y-1.5">
              <li
                v-for="(item, idx) in exp.description"
                :key="idx"
                class="text-xs sm:text-sm text-[#273e47]/85 dark:text-[#f1ede4]/85 leading-relaxed flex items-start gap-2"
              >
                <span class="text-[#a4243b] dark:text-[#d8973c] font-bold">·</span>
                <span>{{ item }}</span>
              </li>
            </ul>

            <div>
              <p class="text-xs font-mono uppercase text-[#bd632f] dark:text-[#d8973c] mb-1.5">
                Tecnologías:
              </p>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="skill in exp.skills"
                  :key="skill"
                  class="px-2 py-0.5 rounded text-[11px] font-mono bg-[#273e47]/5 dark:bg-[#d8c99b]/10 text-[#273e47] dark:text-[#f1ede4]"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </MaterialCard>
      </div>
    </div>
  </section>
</template>
