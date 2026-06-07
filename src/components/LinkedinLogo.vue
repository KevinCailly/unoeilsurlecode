<template>
    <div>
        <img src="/images/InBug-Black.png" :width="size" :height="size" class="block dark:hidden" />
        <img src="/images/InBug-White.png" :width="size" :height="size" class="hidden dark:block" />
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