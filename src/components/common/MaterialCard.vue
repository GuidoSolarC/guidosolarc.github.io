<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'elevated' | 'filled' | 'outlined';
    hoverEffect?: boolean;
    className?: string;
  }>(),
  {
    variant: 'outlined',
    hoverEffect: false,
    className: '',
  }
);
</script>

<template>
  <div
    class="rounded-xl p-5 sm:p-6 overflow-hidden"
    :class="[
      variant === 'elevated' ? 'bg-white dark:bg-[#1a2327] m3-elevation-1 border border-[#273e47]/10 dark:border-[#d8c99b]/10' : '',
      variant === 'filled' ? 'bg-[#f4efe4] dark:bg-[#1f2b30] border-0' : '',
      variant === 'outlined' ? 'bg-white dark:bg-[#182124] border border-[#273e47]/12 dark:border-[#d8c99b]/15' : '',
      hoverEffect ? 'transition-all duration-150 hover:border-[#273e47]/30 dark:hover:border-[#d8c99b]/30' : '',
      className
    ]"
  >
    <slot />
  </div>
</template>
