<template>
  <div class="">
    <!-- *********************************************** -->
    <!-- ************** Not Found Section ************** -->
    <!-- *********************************************** -->
    <section class="w-full sm:w-3/4 md:w-2/3 max-w-5xl mx-auto my-32 text-center px-4">
      <div class="flex flex-col">
        <h2>{{ t('error.404.title') }}</h2>
        <p>{{ t('error.404.message') }}</p>
        <router-link :to="{ name: 'home', params: { locale: locale} }" class="bg-bg border hover:shadow-sm p-2 mt-12 mx-auto z-30">{{ t('error.404.back') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n()

</script>

<style scoped>

section {
  scroll-margin-top: 100px;
}

</style>
