<script setup lang="ts">
import { ArrowDown, Mail, Github, Linkedin, MapPin } from 'lucide-vue-next';
import MaterialButton from '../common/MaterialButton.vue';
import { personalInfo } from '../../data/cvData';
</script>

<template>
  <section class="pt-12 pb-16 lg:pt-20 lg:pb-24">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <!-- Left Column -->
        <div class="lg:col-span-7 space-y-6">
          <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#bd632f] dark:text-[#d8973c]">
            <span>Ingeniería en Informática</span>
            <span aria-hidden="true">/</span>
            <span>Desarrollo de Software</span>
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#273e47] dark:text-[#f1ede4] leading-[1.15] text-balance">
            Desarrollo de software enfocado en
            <span class="text-[#a4243b] dark:text-[#d8973c]">
              arquitectura moderna
            </span>
            y optimización de procesos.
          </h1>

          <p class="text-base sm:text-lg text-[#273e47]/85 dark:text-[#f1ede4]/85 leading-relaxed max-w-xl">
            Soy <strong class="font-semibold text-[#273e47] dark:text-[#f1ede4]">{{ personalInfo.name }}</strong>.
            <br />
            Ingeniero en Informática con experiencia en desarrollo web, servicios backend y modernización de sistemas en áreas de finanzas, salud y marketing.
            Construyo interfaces modulares con <span class="font-medium">Vue.js</span>, backends con <span class="font-medium">Node.js</span> y optimizo flujos de desarrollo con soporte de agentes IA.
          </p>

          <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#273e47]/70 dark:text-[#f1ede4]/70 pt-1">
            <span class="inline-flex items-center gap-1 font-medium">
              <MapPin class="w-3.5 h-3.5 text-[#bd632f]" />
              {{ personalInfo.location }}
            </span>
            <span aria-hidden="true">·</span>
            <span>INACAP</span>
            <span aria-hidden="true">·</span>
            <span>AFEX Chile (Actualidad)</span>
          </div>

          <!-- Buttons -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a href="#proyectos">
              <MaterialButton variant="filled" size="md">
                Ver Proyectos
              </MaterialButton>
            </a>

            <a href="#experiencia">
              <MaterialButton variant="outlined" size="md">
                Experiencia Laboral
                <template #icon-right>
                  <ArrowDown class="w-3.5 h-3.5" />
                </template>
              </MaterialButton>
            </a>

            <a href="#contacto">
              <MaterialButton variant="tonal" size="md">
                <template #icon-left>
                  <Mail class="w-3.5 h-3.5" />
                </template>
                Contacto
              </MaterialButton>
            </a>
          </div>

          <!-- Links -->
          <div class="flex items-center gap-3 pt-2 text-xs text-[#273e47]/70 dark:text-[#f1ede4]/70">
            <span class="font-medium">Enlaces:</span>
            <a
              :href="personalInfo.githubUrl"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1 hover:text-[#a4243b] dark:hover:text-[#d8973c] transition-colors"
            >
              <Github class="w-3.5 h-3.5" />
              <span>github.com/{{ personalInfo.github }}</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              :href="personalInfo.linkedinUrl"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1 hover:text-[#a4243b] dark:hover:text-[#d8973c] transition-colors"
            >
              <Linkedin class="w-3.5 h-3.5" />
              <span>linkedin.com/in/{{ personalInfo.linkedin }}</span>
            </a>
          </div>
        </div>

        <!-- Right Column: Clean, understated photo frame -->
        <div class="lg:col-span-5 flex justify-center">
          <div class="w-full max-w-sm rounded-2xl p-2 bg-white dark:bg-[#182124] border border-[#273e47]/10 dark:border-[#d8c99b]/15 m3-elevation-1">
            <div class="aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#273e47]/5">
              <img
                :src="personalInfo.avatarUrl"
                :alt="personalInfo.name"
                class="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-300"
                referrerpolicy="no-referrer"
              />
            </div>
            <div class="p-3 text-center">
              <p class="text-sm font-semibold text-[#273e47] dark:text-[#f1ede4]">
                {{ personalInfo.name }}
              </p>
              <p class="text-xs text-[#273e47]/70 dark:text-[#f1ede4]/70 font-mono mt-0.5">
                {{ personalInfo.title }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Highlights row -->
      <div class="mt-14 pt-8 border-t border-[#273e47]/10 dark:border-[#d8c99b]/10 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p class="text-xs font-mono uppercase text-[#bd632f] dark:text-[#d8973c]">Experiencia</p>
          <p class="text-lg font-bold text-[#273e47] dark:text-[#f1ede4] mt-0.5">+8 Años</p>
          <p class="text-xs text-[#273e47]/70 dark:text-[#f1ede4]/70 mt-0.5">Desarrollo continuo de software</p>
        </div>

        <div>
          <p class="text-xs font-mono uppercase text-[#bd632f] dark:text-[#d8973c]">Especialidad</p>
          <p class="text-lg font-bold text-[#273e47] dark:text-[#f1ede4] mt-0.5">Frontend &amp; Full Stack</p>
          <p class="text-xs text-[#273e47]/70 dark:text-[#f1ede4]/70 mt-0.5">Vue.js, React, Angular y Node.js</p>
        </div>

        <div>
          <p class="text-xs font-mono uppercase text-[#bd632f] dark:text-[#d8973c]">Sectores</p>
          <p class="text-lg font-bold text-[#273e47] dark:text-[#f1ede4] mt-0.5">Finanzas &amp; Salud</p>
          <p class="text-xs text-[#273e47]/70 dark:text-[#f1ede4]/70 mt-0.5">AFEX, Nuevo Capital, Consalud</p>
        </div>

        <div>
          <p class="text-xs font-mono uppercase text-[#bd632f] dark:text-[#d8973c]">Metodología</p>
          <p class="text-lg font-bold text-[#273e47] dark:text-[#f1ede4] mt-0.5">Scrum, Kanban, IA</p>
          <p class="text-xs text-[#273e47]/70 dark:text-[#f1ede4]/70 mt-0.5">Herramientas y agentes de IA</p>
        </div>
      </div>
    </div>
  </section>
</template>
