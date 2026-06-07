<template>
  <div id="home" :class="[routeClass, 'bg-bg text-text']">
    <Eye/>
    <main class="relative min-h-screen flex flex-col">
      <Navbar/>
      <router-view class="flex-1"/>
      <Footer/>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n';
import Navbar from './components/Navbar.vue';
import Eye from './components/Eye.vue';
import Footer from './components/Footer.vue';

const route = useRoute()
const { locale } = useI18n()

const currentYear = new Date().getFullYear()

locale.value = route.params.locale || 'fr'

const routeClass = computed(() => {
  return (route.name === 'articles' || route.name === 'article-detail' || route.name === 'notice' || window.innerWidth < 768) ? 'logo-behind' : 'logo-front';
})
</script>

<style>
.logo-front .eye-container {
  opacity: 1;
}

.logo-behind .eye-container {
  z-index: 10 !important;
  opacity: 0.2 !important;
}
</style>