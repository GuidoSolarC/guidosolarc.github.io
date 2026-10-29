<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'filled' | 'tonal' | 'outlined' | 'text';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
  }>(),
  {
    variant: 'filled',
    size: 'md',
    type: 'button',
    disabled: false,
    className: '',
  }
);
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="inline-flex items-center justify-center transition-all duration-150 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a4243b] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap shrink-0"
    :class="[
      size === 'sm' ? 'h-8 px-3 text-xs gap-1.5 rounded-lg' : '',
      size === 'md' ? 'h-10 px-4 text-xs sm:text-sm gap-2 rounded-xl' : '',
      size === 'lg' ? 'h-11 px-5 text-sm gap-2 rounded-xl' : '',

      variant === 'filled' ? 'bg-[#a4243b] text-white hover:bg-[#8b1e32] active:bg-[#721929] shadow-xs font-medium' : '',
      variant === 'tonal' ? 'bg-[#d8c99b]/25 text-[#273e47] hover:bg-[#d8c99b]/40 dark:bg-[#273e47]/60 dark:text-[#d8c99b] dark:hover:bg-[#273e47] font-medium border border-[#d8c99b]/40 dark:border-[#273e47]' : '',
      variant === 'outlined' ? 'border border-[#273e47]/20 dark:border-[#d8c99b]/20 text-[#273e47] dark:text-[#f1ede4] hover:bg-[#273e47]/5 dark:hover:bg-[#d8c99b]/10 font-medium' : '',
      variant === 'text' ? 'text-[#a4243b] dark:text-[#d8973c] hover:bg-[#a4243b]/10 dark:hover:bg-[#d8973c]/10 font-medium' : '',
      className
    ]"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </button>
</template>
