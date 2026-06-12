<template>
    <footer class="flex flex-row-reverse shadow-lg dark:shadow-white justify-center py-6">
        <div class="flex flex-row-reverse my-auto mx-4">
          <a v-if="showScrollTop" href="#home" class="flex flex-row justify-center mx-4"><ArrowBigUp/> {{ t('footer.back_top') }}</a>
          <a href="/fr/mentions" class="mx-4" title="notice">{{ t('footer.notice') }}</a>
        </div>

        <!-- Licences -->
        <div class="flex flex-row items-center gap-1 text-xs opacity-60">
            <p>
                © {{ currentYear }} Kévin Cailly -
                {{ t('footer.license.code') }}
                <a href="https://opensource.org/licenses/MIT" target="_blank" class="underline hover:opacity-100">MIT</a>
            </p>
            <p> - </p>
            <p>
                {{ t('footer.license.content') }}
                <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" class="underline hover:opacity-100">CC BY-NC-ND 4.0</a>
            </p>
        </div>
    </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import ArrowBigUp from '@/components/BigUpArrow.vue';
import { useCurrentYear } from '@/composables/useCurrentYear';

const { t } = useI18n()

const showScrollTop = ref(false)

const { currentYear } = useCurrentYear()

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>