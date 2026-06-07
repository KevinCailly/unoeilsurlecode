<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" class="text-dark dark:text-white" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"/></svg>
    </div>
</template>

<script setup>
const props = defineProps({
  size: {
    type: Number,
    default: 24
  }
})
</script>

