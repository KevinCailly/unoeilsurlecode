<template>
    <header class="sticky top-0 z-50 bg-bg text-text shadow-md dark:shadow-white">
        <nav class="border-gray-200 flex flex-wrap items-center justify-between mx-auto p-4">
            <router-link :to="{name: 'home', params: { locale: locale }}" class="flex items-center space-x-3 rtl:space-x-reverse ">
                <div class="rounded-full p-2 dark:bg-text">
                    <img src="/images/logoSite.png" class="h-8" alt="Logo website"></img>
                </div>
                <span class="self-center text-2xl font-semibold whitespace-nowrap">{{ t('site.name') }}</span>
            </router-link>
            
            <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
                <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h14M4 12h16M4 18h16"/>
                </svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>

            <!-- Menu -->
            <ul class="hidden md:flex space-x-6 my-auto">
                <li>
                    <router-link :to="{name: 'home', hash: '#about', params: { locale: locale }}" class="hover:text-gray-300 text-lg">{{ t('about.name') }}</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'home', hash: '#skills', params: { locale: locale }}" class="hover:text-gray-300 text-lg">{{ t('skills.name') }}</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'home', hash: '#portfolio', params: { locale: locale }}" class="hover:text-gray-300 text-lg">{{ t('portfolio.name') }}</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'home', hash: '#contact', params: { locale: locale }}" class="hover:text-gray-300 text-lg">{{ t('contact.name') }}</router-link>
                </li>
                <li>
                    <SwitchButton :current-locale="currentLocale" imageFR="/images/frenchFlag.png" imageEN="/images/englishFlag.png" @change="switchLocale"/>
                </li>
                <li class="w-6 h-6 mx-auto my-auto">
                    <button @click="toggleDarkMode" class="rounded-full">
                        <Sun v-if="isDark" color="#ffffff"></Sun>
                        <Moon v-else color="#000000"></Moon>
                    </button>
                </li>
                <li>
                    <router-link :to="{name: 'articles', params: { locale: locale }}" class="hover:text-gray-300 text-lg">{{ t('blog.name') }}</router-link>
                </li>
            </ul>
        </nav>
        <!-- Menu mobile -->
        <div v-if="isOpen" class="md:hidden absolute top-full left-0 w-full px-4 py-3 border-t-2 border-b-2 bg-bg dark:bg-darkbg text-text dark:text-darktext shadow-md dark:shadow-white">
            <ul class="flex flex-col p-4 gap-4 items-center text-center">
                <li>
                    <router-link :to="{name: 'home', hash: '#about', params: { locale: locale }}" class="hover:text-gray-300">{{ t('about.name') }}</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'home', hash: '#skills', params: { locale: locale }}" class="hover:text-gray-300">{{ t('skills.name') }}</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'home', hash: '#portfolio', params: { locale: locale }}" class="hover:text-gray-300">{{ t('portfolio.name') }}</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'home', hash: '#contact', params: { locale: locale }}" class="hover:text-gray-300">{{ t('contact.name') }}</router-link>
                </li>
                <li>
                    <SwitchButton :current-locale="currentLocale" imageFR="/images/frenchFlag.png" imageEN="/images/englishFlag.png" @change="switchLocale"/>
                </li>
                <li class="w-6 h-6 mx-auto my-auto">
                    <button @click="toggleDarkMode" class="rounded-full bg-white dark:bg-gray-700">
                        <Sun v-if="isDark"/>
                        <Moon v-else />
                    </button>
                </li>
                <li>
                    <router-link :to="{name: 'articles', params: { locale: currentLocale }}" class="hover:text-gray-300">{{ t('blog.name') }}</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router'
import SwitchButton from '@/components/SwitchButton.vue'
import Sun from '@/components/Sun.vue';
import Moon from '@/components/Moon.vue';

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()
const isOpen = ref(false)
const isDark = ref(false)

const currentLocale = computed(() => route.params.locale || 'fr')

onMounted(() => {
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.add("dark")
        isDark.value = true
    } else {
        document.documentElement.classList.remove("dark")
        isDark.value = false
    }
})

const toggleDarkMode = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
        document.documentElement.classList.add("dark")
        localStorage.theme = "dark"
    } else {
        document.documentElement.classList.remove("dark")
        localStorage.theme = "light"
    }
}

function switchLocale(newLocale) {
    router.push({
        name: route.name,
        params: {
            ...route.params,
            locale: newLocale,
        },
        query: route.query,
    })
    
}

watch(
  () => route.params.locale,
  (newLocale) => {
    if (newLocale && locale.value !== newLocale) {
      locale.value = newLocale
    }
  },
  { immediate: true }
)
</script>