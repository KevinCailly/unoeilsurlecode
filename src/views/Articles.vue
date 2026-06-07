<template>
  <div class="flex flex-col items-center text-center space-y-12 flex-1 min-h-full">
    <ul class="flex flex-raw space-x-12 mt-6 z-30">
      <li class="border rounded hover:shadow p-4" :class="{ 'bg-gray-200 dark:bg-gray-700': activeFilter === 'projects' }">
        <button @click="selectFilter('projects')">{{ t('blog.articles.projects') }}</button>
      </li>
      <li class="border rounded hover:shadow p-4" :class="{ 'bg-gray-200 dark:bg-gray-700': activeFilter === 'all' }">
        <button @click="selectFilter('all')">{{ t('blog.articles.all') }}</button>
      </li>
      <li class="border rounded hover:shadow p-4" :class="{ 'bg-gray-200 dark:bg-gray-700': activeFilter === 'articles' }">
        <button @click="selectFilter('articles')">{{ t('blog.articles.articles') }}</button>
      </li>
    </ul>

    <div class="flex-1 w-full flex items-center justify-center z-30">
      <div class="w-full max-w-4xl px-4">
        <div v-if="paginatedArticles.length === 0">
          <p class="text-center my-40">{{ t('blog.articles.no articles') }}</p>
        </div>
        <div v-else>
          <ul class="space-y-2">
            <li v-for="article in paginatedArticles" :key="article.id" class="mb-2 p-2 border rounded shadow-sm hover:shadow-md dark:shadow-white transition">
              <router-link :to="{ name: 'article-detail', params: { locale: locale, id: article.id, slug: locale === 'fr' ? article.slugFR : article.slugEN } }">
                <h2 class="text-lg font-semibold mb-2">
                  {{ locale === 'fr' ? article.titleFR : article.titleEN }}
                </h2>
                <p class="text-gray-600 mb-2">
                  {{ locale === 'fr' ? article.excerptFR : article.excerptEN }}
                </p>
                <div class="flex items-center justify-between text-xs">
                  <ul class="flex gap-2 flex-1 justify-center min-w-0">
                    <li v-for="tag in article.tags" :key="tag" class="rounded-full px-2 py-1 bg-gray-600 text-white dark:bg-white dark:text-black">
                      #{{ tag }}
                    </li>
                  </ul>
                  <small class="text-gray-500 mx-4 shrink-0">
                    {{ t('blog.article.published') }}
                    {{ formatDate(article.date) }}
                  </small>
                </div>
              </router-link>
            </li>
          </ul>

          <!-- Pagination -->
          <div class="flex justify-between items-center my-6">
            <button :disabled="currentPage === 1" @click="currentPage--" class="px-4 py-2 z-30 bg-gray-200 text-text dark:text-darktext rounded disabled:opacity-50">
              ⬅️ Précédent
            </button>
            <p>Page {{ currentPage }} / {{ totalPages }}</p>
            <button :disabled="currentPage === totalPages" @click="currentPage++" class="px-4 py-2 z-30 bg-gray-200 text-text dark:text-darktext rounded disabled:opacity-50">
              Suivant ➡️
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useArticles } from '@/composables/useArticles'

const { t, locale } = useI18n()
const { getAll, getByTag, getAllExcludeTag } = useArticles()

const activeFilter = ref('all')
const currentPage = ref(1)
const perPage = 5

const filteredArticles = computed(() => {
  if (activeFilter.value === 'projects') return getByTag('projet') || []
  if (activeFilter.value === 'articles') return getAllExcludeTag('projet') || []
  return getAll() || []
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredArticles.value.length / perPage))
)

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredArticles.value.slice(start, start + perPage)
})

function selectFilter(filter) {
  activeFilter.value = filter
  currentPage.value  = 1
}

function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
}
</script>