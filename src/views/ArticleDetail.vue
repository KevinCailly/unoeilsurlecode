<template>
  
  <!-- Cover -->
  <div v-if="article" class="relative z-30">
    <img v-if="article.image" :src="article.image" :alt="locale === 'fr' ? article.titleFR : article.titleEN" class="w-full object-cover"/>
  </div>
  
  <div class="flex flex-row">
    <div class="w-1/5"></div>
    <div class="w-3/5">
      <div v-if="!article">
        <p class="mt-2 text-center text-gray-600">{{ t('blog.article.not_found') }}</p>
      </div>
      <div v-else class="flex flex-col items-center justify-center">
        <h1 class="py-6 text-6xl">
          {{ locale === 'fr' ? article.titleFR : article.titleEN }}
        </h1>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mt-4">
          <span v-for="tag in (locale === 'fr' ? article.tagsFR : article.tagsEN)" :key="tag" class="px-2 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700">
            #{{ tag }}
          </span>
        </div>

        <!-- Info -->
        <div class="flex flex-row gap-2 mt-4 justify-between w-full">
          <span v-if="article.time">
            {{ t('blog.article.reading time') }} : {{ article.time }}
          </span>
          <span v-if="article.date">
            {{ t('blog.article.written') }} : {{ article.date }}
          </span>
        </div>
        
        <!-- Contenu -->
        <div class="prose prose-lg max-w-none w-full px-4 mt-12 z-30 text-text" v-html="compiledContent"/>
        
      </div>
    </div>
    <div class="w-1/5"></div>
  </div>

  <!-- Gallery -->
  <div v-if="article">
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
  const content = locale.value === 'fr'
    ? article.value.contentFR
    : article.value.contentEN
  return content
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

.prose :where(ul, ol) {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.prose :where(li) {
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
}

.prose :where(h1), .prose :where(h2), .prose :where(h3),
.prose :where(h4), .prose :where(h5), .prose :where(h6) {
  color: var(--text);
}

</style>