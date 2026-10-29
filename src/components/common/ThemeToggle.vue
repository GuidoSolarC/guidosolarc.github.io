<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Moon, Sun } from 'lucide-vue-next';

defineProps<{
  className?: string;
}>();

const isDark = ref(false);

onMounted(() => {
  const stored = localStorage.getItem('theme');
  if (stored) {
    isDark.value = stored === 'dark';
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  applyTheme();
});

const applyTheme = () => {
  const root = document.documentElement;
  if (isDark.value) {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
  applyTheme();
};
</script>

<template>
  <button
    type="button"
    @click="toggleTheme"
    :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
    :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
    class="relative inline-flex items-center justify-center w-9 h-9 rounded-full text-[#273e47] dark:text-[#f1ede4] hover:bg-[#273e47]/10 dark:hover:bg-[#d8c99b]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a4243b] cursor-pointer"
    :class="className"
  >
    <Sun v-if="isDark" class="w-4 h-4 text-[#d8973c] transition-transform hover:rotate-45" />
    <Moon v-else class="w-4 h-4 text-[#273e47] transition-transform hover:-rotate-12" />
  </button>
</template>
