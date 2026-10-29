<script setup lang="ts">
import { ref } from 'vue';
import { Mail, Copy, Check, Linkedin, Github, MapPin, Send } from 'lucide-vue-next';
import MaterialButton from '../common/MaterialButton.vue';
import MaterialCard from '../common/MaterialCard.vue';
import { personalInfo } from '../../data/cvData';

const copied = ref(false);

const handleCopyEmail = () => {
  navigator.clipboard.writeText(personalInfo.email);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};
</script>

<template>
  <section id="contacto" class="py-16 border-t border-[#273e47]/10 dark:border-[#d8c99b]/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="max-w-2xl mx-auto">
        <!-- Header -->
        <div class="text-center space-y-2 mb-8">
          <div class="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#bd632f] dark:text-[#d8973c]">
            <Mail class="w-3.5 h-3.5" />
            <span>Contacto</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-[#273e47] dark:text-[#f1ede4]">
            Conversemos
          </h2>
          <p class="text-sm text-[#273e47]/75 dark:text-[#f1ede4]/75">
            Disponible para proyectos de ingeniería de software, arquitectura frontend y desarrollo full-stack.
          </p>
        </div>

        <!-- Contact Box -->
        <MaterialCard
          variant="outlined"
          class="p-6 sm:p-8 space-y-6"
        >
          <!-- Links & Location -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              :href="personalInfo.linkedinUrl"
              target="_blank"
              rel="noreferrer"
              class="p-3.5 rounded-xl border border-[#273e47]/10 dark:border-[#d8c99b]/10 hover:border-[#a4243b] dark:hover:border-[#d8973c] transition-colors group block"
            >
              <div class="flex items-center gap-2.5">
                <Linkedin class="w-4 h-4 text-[#a4243b] dark:text-[#d8973c] shrink-0" />
                <div>
                  <span class="text-[11px] text-[#273e47]/60 dark:text-[#f1ede4]/60 block font-mono">LinkedIn</span>
                  <span class="text-xs font-semibold text-[#273e47] dark:text-[#f1ede4]">
                    /{{ personalInfo.linkedin }}
                  </span>
                </div>
              </div>
            </a>

            <a
              :href="personalInfo.githubUrl"
              target="_blank"
              rel="noreferrer"
              class="p-3.5 rounded-xl border border-[#273e47]/10 dark:border-[#d8c99b]/10 hover:border-[#a4243b] dark:hover:border-[#d8973c] transition-colors group block"
            >
              <div class="flex items-center gap-2.5">
                <Github class="w-4 h-4 text-[#273e47] dark:text-[#f1ede4] shrink-0" />
                <div>
                  <span class="text-[11px] text-[#273e47]/60 dark:text-[#f1ede4]/60 block font-mono">GitHub</span>
                  <span class="text-xs font-semibold text-[#273e47] dark:text-[#f1ede4]">
                    @{{ personalInfo.github }}
                  </span>
                </div>
              </div>
            </a>

            <div class="p-3.5 rounded-xl border border-[#273e47]/10 dark:border-[#d8c99b]/10">
              <div class="flex items-center gap-2.5">
                <MapPin class="w-4 h-4 text-[#bd632f] shrink-0" />
                <div>
                  <span class="text-[11px] text-[#273e47]/60 dark:text-[#f1ede4]/60 block font-mono">Ubicación</span>
                  <span class="text-xs font-semibold text-[#273e47] dark:text-[#f1ede4]">
                    {{ personalInfo.location }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </MaterialCard>
      </div>
    </div>
  </section>
</template>
