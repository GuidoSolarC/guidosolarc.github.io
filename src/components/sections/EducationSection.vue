<script setup lang="ts">
import { GraduationCap, Award, Globe } from 'lucide-vue-next';
import MaterialCard from '../common/MaterialCard.vue';
import { educationList, certificationsList, personalInfo } from '../../data/cvData';
</script>

<template>
  <section id="educacion" class="py-16 border-t border-[#273e47]/10 dark:border-[#d8c99b]/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#bd632f] dark:text-[#d8973c] mb-1">
          <GraduationCap class="w-3.5 h-3.5" />
          <span>Formación</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-[#273e47] dark:text-[#f1ede4]">
          Educación y Certificados
        </h2>
        <p class="text-sm text-[#273e47]/75 dark:text-[#f1ede4]/75 mt-1 max-w-xl">
          Estudios de ingeniería de software y capacitación continua en metodologías y tecnologías backend.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Degree & Languages (Left 5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          <h3 class="text-xs font-mono uppercase tracking-wider text-[#bd632f] dark:text-[#d8973c]">
            Título Profesional
          </h3>

          <MaterialCard
            v-for="edu in educationList"
            :key="edu.degree"
            variant="outlined"
            class="p-5"
          >
            <div class="flex items-start gap-3">
              <div class="w-9 h-9 rounded-lg bg-[#273e47]/5 dark:bg-[#d8c99b]/10 text-[#bd632f] dark:text-[#d8973c] flex items-center justify-center shrink-0">
                <GraduationCap class="w-4 h-4" />
              </div>
              <div>
                <span class="text-xs font-mono text-[#a4243b] dark:text-[#d8973c]">
                  {{ edu.period }}
                </span>
                <h4 class="text-base font-bold text-[#273e47] dark:text-[#f1ede4] mt-0.5">
                  {{ edu.degree }}
                </h4>
                <p class="text-xs text-[#273e47]/70 dark:text-[#f1ede4]/70 mt-0.5">
                  {{ edu.institution }} · {{ edu.location }}
                </p>
                <p
                  v-if="edu.description"
                  class="text-xs text-[#273e47]/80 dark:text-[#f1ede4]/80 mt-2.5 leading-relaxed"
                >
                  {{ edu.description }}
                </p>
              </div>
            </div>
          </MaterialCard>

          <!-- Languages (No levels) -->
          <div>
            <h3 class="text-xs font-mono uppercase tracking-wider text-[#bd632f] dark:text-[#d8973c] mb-2.5">
              Idiomas
            </h3>
            <MaterialCard variant="outlined" class="p-4">
              <div class="flex items-center gap-6">
                <div
                  v-for="lang in personalInfo.languages"
                  :key="lang.language"
                  class="flex items-center gap-2 text-xs font-medium text-[#273e47] dark:text-[#f1ede4]"
                >
                  <Globe class="w-3.5 h-3.5 text-[#bd632f] dark:text-[#d8973c]" />
                  <span>{{ lang.language }}</span>
                </div>
              </div>
            </MaterialCard>
          </div>
        </div>

        <!-- Certifications (Right 7 cols) -->
        <div class="lg:col-span-7 space-y-4">
          <h3 class="text-xs font-mono uppercase tracking-wider text-[#bd632f] dark:text-[#d8973c]">
            Certificaciones y Cursos
          </h3>

          <div class="space-y-2.5">
            <MaterialCard
              v-for="cert in certificationsList"
              :key="cert.title"
              variant="outlined"
              class="p-3.5 flex items-center justify-between gap-3"
            >
              <div class="flex items-center gap-2.5">
                <Award class="w-4 h-4 text-[#bd632f] dark:text-[#d8973c] shrink-0" />
                <div>
                  <h4 class="text-xs sm:text-sm font-semibold text-[#273e47] dark:text-[#f1ede4]">
                    {{ cert.title }}
                  </h4>
                  <p class="text-[11px] text-[#273e47]/60 dark:text-[#f1ede4]/60">
                    {{ cert.platform }}
                  </p>
                </div>
              </div>

              <span class="text-xs font-mono text-[#273e47]/60 dark:text-[#f1ede4]/60 shrink-0">
                {{ cert.date }}
              </span>
            </MaterialCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
