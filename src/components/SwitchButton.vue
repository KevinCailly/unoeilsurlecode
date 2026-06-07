<template>
  <button
    @click="toggle"
    class="cursor-pointer h-10 w-18 flex items-center space-x-2 rounded-full px-1 mx-auto border-2 bg-gray-200"
  >
    <!-- FR -->
    <div
      class="h-6 w-6 bg-contain bg-center rounded-full"
      :class="currentLocale === 'fr'
        ? 'ring-4 ring-gray-900 dark:ring-white opacity-100'
        : 'opacity-75'"
      :style="{ backgroundImage: `url(${imageFR})` }"
    ></div>

    <!-- EN -->
    <div
      class="h-6 w-6 bg-contain bg-center rounded-full"
      :class="currentLocale === 'en'
        ? 'ring-4 ring-gray-900 dark:ring-white opacity-100'
        : 'opacity-75'"
      :style="{ backgroundImage: `url(${imageEN})` }"
    ></div>
  </button>
</template>

<script setup>
const props = defineProps({
  currentLocale: {
    type: String,
    required: true,
    validator: v => ['fr', 'en'].includes(v),
  },
  imageFR: String,
  imageEN: String,
})

const emit = defineEmits(['change'])

function toggle() {
  emit('change', props.currentLocale === 'fr' ? 'en' : 'fr')
}
</script>
