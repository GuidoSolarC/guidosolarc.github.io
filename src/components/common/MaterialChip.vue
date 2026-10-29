<script setup lang="ts">
defineProps<{
  label: string;
  selected?: boolean;
  count?: number;
  className?: string;
}>();

defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  <button
    type="button"
    @click="$emit('click')"
    class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-colors duration-150 cursor-pointer select-none whitespace-nowrap shrink-0 border active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#a4243b]"
    :class="[
      selected
        ? 'bg-[#a4243b] text-white border-[#a4243b]'
        : 'bg-white dark:bg-[#1a2327] text-[#273e47] dark:text-[#f1ede4] border-[#273e47]/15 dark:border-[#d8c99b]/20 hover:bg-[#273e47]/5 dark:hover:bg-[#d8c99b]/10',
      className
    ]"
  >
    <span>{{ label }}</span>
    <span
      v-if="count !== undefined"
      class="px-1 py-0.2 rounded text-[10px]"
      :class="selected ? 'bg-white/20 text-white' : 'bg-[#273e47]/10 dark:bg-[#d8c99b]/20 text-current'"
    >
      {{ count }}
    </span>
  </button>
</template>
