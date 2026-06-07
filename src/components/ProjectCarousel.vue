<template>
  <div class="relative z-30 max-w-5xl mx-auto mt-16 overflow-hidden group">
    <button @click="scroll(-1)" class="nav-btn left-4">‹</button>

    <div ref="carousel" class="flex gap-10 p-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[calc(50%-230px)] py-8">
      <div v-for="prj in projects" :key="prj.id" class="project-card snap-center shrink-0 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-2 hover:shadow-2xl">
        <a :href="prj.slug">
          <img :src="prj.url" class="project-img"/>
          <div class="project-overlay bg-text">
            <h3 class="bg-bg">{{ prj.title }}</h3>
          </div>
        </a>
      </div>
    </div>

  <button @click="scroll(1)" class="nav-btn right-4">›</button></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  projects: { type: Array, required: true },
  autoplay: { type: Boolean, default: true },
  delay: { type: Number, default: 4000 }
})

const carousel = ref(null)
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

<style scoped>
.project-card {
  width: 520px;
  border-radius: 1.25rem;
  overflow: hidden;
  background: var(--tw-bg-surface);
}

.project-card:hover {
  transform: translateY(-6px);
}

.project-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.project-overlay {
  padding: 1rem;
  text-align: center;
  font-weight: 600;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,.6);
  backdrop-filter: blur(6px);
  border-radius: 999px;
  width: 44px;
  height: 44px;
  font-size: 24px;
}
</style>