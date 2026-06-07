<template>
  <div class="relative group mt-8">

    <button @click="scroll(-1)" class="absolute top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow
    opacity-0 group-hover:opacity-100 transition z-40 left-2">⬅</button>
    
    <!-- Carrousel -->
    <div ref="carousel" class="flex w-72 gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 text-white">
      <template v-for="img in images" :key="img.id">
        <div class="flex flex-col w-72 shrink-0 rounded-xl shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer my-auto">
          <img :src="img.url" :alt="img.alt" @click="openLightbox(img)" class="snap-center md:w-96 max-h-80 object-contain"/>
        </div>
      </template>
      
    </div>

    <button @click="scroll(1)" class="absolute top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow
    opacity-0 group-hover:opacity-100 transition z-40 right-2">➡</button>

    <!-- Lightbox -->
    <Teleport to="body">
      <div v-if="lightbox" class="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center" @click.self="closeLightbox">
        <img :src="lightbox.url" :alt="lightbox.alt" class="max-w-[90vw] max-h-[90vh] object-contain"/>
        <button @click="closeLightbox" class="absolute top-4 right-4 text-white text-3xl">✕</button>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  autoplay: { type: Boolean, default: true },
  delay: { type: Number, default: 4000 },
  mode: {type: String, default: 'lightbox'},
})

const carousel = ref(null)
const lightbox = ref(null)
let interval = null

function scroll(direction = 1) {
  const el = carousel.value
  const width = el.querySelector('img')?.clientWidth || 300

  const maxScroll = el.scrollWidth - el.clientWidth
  const next = el.scrollLeft + direction * width

  if (next >= maxScroll) {
    el.scrollTo({ left: 0, behavior: 'smooth' })
  } else if (next <= 0) {
    el.scrollTo({ left: maxScroll, behavior: 'smooth' })
  } else {
    el.scrollBy({ left: direction * width, behavior: 'smooth' })
  }
}

function openLightbox(img) {
  lightbox.value = img
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightbox.value = null
  document.body.style.overflow = ''
}

/* autoplay */
onMounted(() => {
  if (props.autoplay) {
    interval = setInterval(() => scroll(1), props.delay)
  }
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>
