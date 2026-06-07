<template>
  <section ref="parallax" class="relative overflow-hidden"
    :style="{ height }">
    
    <!-- Image -->
    <div v-if="!sliced" class="absolute inset-0 bg-cover bg-center"
      :style="{
        backgroundImage: `url(${image})`,
        transform: `translateY(${textOffset * 0.15}px)`
      }"></div>

    <div v-else class="absolute inset-0 flex justify-end right-20">
      <div class="h-full flex" style="width:70%">
        <div class="slice" :style="sliceStyle(0, 0.3)"></div>
        <span class="separator"></span>
        <div class="slice" :style="sliceStyle(50, 0.2)"></div>
        <span class="separator"></span>
        <div class="slice" :style="sliceStyle(100, 0.1)"></div>
      </div>
    </div>

    <!-- Texte -->
    <div class="absolute inset-0 z-10 flex items-center"
      :style="{
        paddingLeft: sliced ? '8%' : '15%',
        transform: `translateY(${textOffset}px)`,
        opacity: textOpacity,
      }">
      <slot class="">
        <h1 class="text-4xl font-bold bg-gray-700 px-4 py-2 rounded text-white">
          {{ text }}
        </h1>
      </slot>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  image: { type: String, required: true },
  speed: { type: Number, default: 0.3 },
  height: { type: String, default: "80vh" },
  zIndex: {type: String, default: "20"},
  text: { type: String, default: "" },
  sliced: { type: Boolean, default: true }
});

const parallax = ref(null);
const textOffset = ref(0);
const textOpacity = ref(1);

const sliceStyle = (x, depth) => ({
  backgroundImage: `url(${props.image})`,
  backgroundSize: "cover",
  backgroundPosition: `${x}% center`,
  backgroundRepeat: "no-repeat",
  transform: `skewX(-12deg) translateY(${textOffset.value * depth}px)`
});

const handleScroll = () => {
  if (!parallax.value) return;

  const rect = parallax.value.getBoundingClientRect();
  const progress = -rect.top * props.speed;

  textOffset.value = progress;
  textOpacity.value = Math.max(0, 1 - progress / 300);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.slice {
  flex: 1;
  height: 100%;
  z-index: 40;
  transform-origin: center;
}

.separator {
  width: 40px;  /* Modif */
  background: transparent;
  transform: skewX(-12deg);
  z-index: 0;
}
</style>
