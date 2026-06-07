<template>
  <div v-if="!article">
    <p class="mt-2 text-center text-gray-600">{{ t('blog.article.not_found') }}</p>
  </div>
  <div v-else class="flex flex-col items-center justify-center">

    <!-- Cover -->
    <img v-if="article.image" :src="article.image" :alt="locale === 'fr' ? article.titleFR : article.titleEN" class="w-full object-cover z-30"/>

    <h1 class="py-6 text-6xl">
      {{ locale === 'fr' ? article.titleFR : article.titleEN }}
    </h1>

    <!-- Tags -->
    <div class="flex flex-wrap gap-2 mt-4">
      <span v-for="tag in article.tags" :key="tag" class="px-2 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700">
        #{{ tag }}
      </span>
    </div>

    <!-- Contenu -->
    <div class="prose prose-lg max-w-none w-full px-4 mt-8" v-html="compiledContent"/>

    <!-- Gallery -->
    <div v-if="galleryImages.length > 0" class="relative z-30 w-full bg-gray-900 dark:bg-gray-700 mt-12">
      <div class="flex flex-col items-center justify-center py-8">
        <h2 class="text-white py-6 text-4xl">{{ t('blog.article.gallery') }}</h2>
        <ImageCarousel :images="galleryImages" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useArticles } from '@/composables/useArticles'
import ImageCarousel from '@/components/ImageCarousel.vue'

const { t, locale } = useI18n()
const route  = useRoute()
const router = useRouter()
const { getById } = useArticles()

const article = computed(() => getById(route.params.id))

const compiledContent = computed(() => {
  if (!article.value) return ''
  return locale.value === 'fr'
    ? article.value.contentFR
    : article.value.contentEN
})

const allImages = import.meta.glob(
  '/public/images/articles/**/*.webp',
  { eager: true, query: '?url', import: 'default' }
)

const galleryImages = computed(() => {
  if (!article.value) return []

  const id = article.value.id
  const prefix = `/public/images/articles/${id}/`

  return Object.entries(allImages)
    .filter(([path]) => path.startsWith(prefix) && !path.includes('cover.webp'))
    .map(([path, url]) => {
      const name = path.split('/').pop().replace('.webp', '')
      return {
        id: name,
        url,
        alt: name,
      }
    })
})

const normalizeUrl = () => {
  if (!article.value) return

  const expectedSlug = locale.value === 'fr'
    ? article.value.slugFR
    : article.value.slugEN

  if (route.params.slug !== expectedSlug) {
    router.replace({
      name: 'article-detail',
      params: {
        locale: locale.value,
        id: route.params.id,
        slug: expectedSlug,
      },
      query: route.query,
    })
  }
}

watch(
  () => [route.params.locale, route.params.id, locale.value],
  () => normalizeUrl(),
  { immediate: true }
)
</script>

<style scoped>
img.object-cover {
  max-height: 450px;
  object-fit: cover;
}
</style>