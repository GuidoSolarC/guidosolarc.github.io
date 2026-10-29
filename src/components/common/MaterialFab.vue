<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ArrowUp } from 'lucide-vue-next';

const showScrollTop = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 350;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <div v-if="showScrollTop" class="fixed bottom-6 right-6 z-30">
    <button
      type="button"
      @click="scrollToTop"
      aria-label="Volver arriba"
      class="w-10 h-10 rounded-xl bg-[#273e47] text-[#f1ede4] dark:bg-[#d8c99b] dark:text-[#273e47] shadow-sm hover:opacity-90 flex items-center justify-center transition-all duration-150 active:scale-95 cursor-pointer"
    >
      <ArrowUp class="w-4 h-4" />
    </button>
  </div>
</template>
