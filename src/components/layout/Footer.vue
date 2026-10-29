<script setup lang="ts">
import { ArrowUp, Terminal } from 'lucide-vue-next';
import { personalInfo } from '../../data/cvData';

defineEmits<{
  (e: 'open-deploy-guide'): void;
}>();

const currentYear = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <footer class="w-full py-10 transition-colors">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="mt-8 pt-6 border-t border-[#273e47]/5 dark:border-[#d8c99b]/5 text-[11px] text-[#273e47]/50 dark:text-[#f1ede4]/50">
        <span>© {{ currentYear }} {{ personalInfo.name }}. Desarrollado en Vue 3 con TypeScript y Tailwind CSS.</span>
      </div>
    </div>
  </footer>
</template>
