<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><path fill="none" :stroke="color" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    default: 24
  },
  color: {
    type: String,
    default: "#004df7"
  }
})

const color = ref("#004df7")
const size = ref(24)
</script>