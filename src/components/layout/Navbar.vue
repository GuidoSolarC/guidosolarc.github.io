<script setup lang="ts">
import { ref } from 'vue';
import { Menu, X, Github, Linkedin, HelpCircle } from 'lucide-vue-next';
import ThemeToggle from '../common/ThemeToggle.vue';
import MaterialButton from '../common/MaterialButton.vue';
import { personalInfo } from '../../data/cvData';

defineEmits<{
  (e: 'open-deploy-guide'): void;
}>();

const mobileMenuOpen = ref(false);

const navLinks = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Contacto', href: '#contacto' },
];
</script>

<template>
  <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#faf9f6]/90 dark:bg-[#12181b]/90 border-b border-[#273e47]/10 dark:border-[#d8c99b]/10 transition-colors">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between gap-8 h-16">
        <!-- Brand Wordmark -->
        <a
          href="#"
          class="md:hidden flex items-center gap-2.5 text-sm sm:text-base font-semibold tracking-tight text-[#273e47] dark:text-[#f1ede4] whitespace-nowrap shrink-0 hover:text-[#a4243b] dark:hover:text-[#d8973c] transition-colors"
        >
          <span class="w-7 h-7 rounded-lg bg-[#273e47] text-[#f1ede4] dark:bg-[#d8c99b] dark:text-[#273e47] flex items-center justify-center font-mono text-xs font-semibold">
            GS
          </span>
          <span>{{ personalInfo.name }}</span>
        </a>

        <!-- 4-5 Clean single-line nav links -->
        <nav class="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-[#273e47]/80 dark:text-[#f1ede4]/80">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="hover:text-[#a4243b] dark:hover:text-[#d8973c] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Right Action Zone -->
        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            :href="personalInfo.githubUrl"
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil de GitHub"
            class="p-1.5 text-[#273e47]/80 dark:text-[#f1ede4]/80 hover:text-[#a4243b] dark:hover:text-[#d8973c] transition-colors shrink-0"
          >
            <Github class="w-4 h-4" />
          </a>

          <a
            :href="personalInfo.linkedinUrl"
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil de LinkedIn"
            class="p-1.5 text-[#273e47]/80 dark:text-[#f1ede4]/80 hover:text-[#a4243b] dark:hover:text-[#d8973c] transition-colors shrink-0"
          >
            <Linkedin class="w-4 h-4" />
          </a>

          <ThemeToggle />

          <a href="#contacto">
            <MaterialButton variant="filled" size="sm">
              Contacto
            </MaterialButton>
          </a>

          <!-- Mobile menu button -->
          <button
            type="button"
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 text-[#273e47] dark:text-[#f1ede4]"
            aria-label="Menú principal"
          >
            <X v-if="mobileMenuOpen" class="w-5 h-5" />
            <Menu v-else class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Mobile dropdown -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-[#273e47]/10 dark:border-[#d8c99b]/10 space-y-1">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 text-sm font-medium rounded-lg text-[#273e47] dark:text-[#f1ede4] hover:bg-[#273e47]/5 dark:hover:bg-[#d8c99b]/10 transition-colors"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </header>
</template>
