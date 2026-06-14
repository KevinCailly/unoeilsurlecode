<template>
  <div>
    <!-- *********************************************** -->
    <!-- *************** Header picture **************** -->
    <!-- *********************************************** -->
    <div class="relative h-full overflow-hidden">
      <Parallax image="/images/logo_1.png" zIndex="0" :speed=0.5 :sliced="false" height="80vh">
        <div class="flex justify-between w-full px-18">
          <h1 class="text-6xl text-black md:text-8xl font-extrabold leading-tight">{{ t('site.name') }}</h1>
        </div>
      </Parallax>
    </div>
    
    <!-- *********************************************** -->
    <!-- **************** About Section **************** -->
    <!-- *********************************************** -->
    <section class="w-full sm:w-3/4 md:w-2/3 max-w-5xl mx-auto my-32 text-center px-4" id="about">
      <h3 class="my-4 text-2xl">{{ t('about.name') }}</h3>
      <p class="mb-4 text-justify" v-html="$t('about.intro')"></p>
      <h4 class="my-2" v-html="$t('about.question')"></h4>
      <p class="text-justify" v-html="$t('about.response')"></p>
      
      <div class="w-3/4 h-0.5 bg-text dark:bg-darktext mx-auto my-10 rounded-full opacity-75"></div>

      <div class="flex flex-col md:flex-row items-center justify-between my-6 ">
        <div class="md:w-1/4">
          <div class="my-4">
            <img src="/images/KC.jpg" class="rounded-full" alt="Photo" width="250" height="auto">
          </div>
        </div>
        <div class="md:w-2/4 mx-auto">
          <p class="text-justify" v-html="$t('about.presentation', {age})"></p>
        </div>
      </div>

      <div class="relative z-30">
        <div class="flex flex-col bg-bg rounded shadow-2xl dark:shadow-md dark:shadow-white my-10">
          <h4 class="font-bold pt-6">{{ t('about.edito.name') }}</h4>
          <div class="w-3/4 h-0.5 bg-text dark:bg-darktext mx-auto my-10 rounded-full"></div>
          <p class="py-6 px-4 text-center" v-html="$t('about.edito.text')"></p>
        </div>
      </div>
    </section>

    <!-- *********************************************** -->
    <!-- **************** Skills Section *************** -->
    <!-- *********************************************** -->
    <div class="relative h-full overflow-hidden">
      <Parallax image="/images/project.jpg" :sliced="!isMobile" zIndex="40" :speed=0.5 height="80vh" :text="t('skills.name')"/>
    </div>
  
    <section class="w-full sm:w-3/4 md:w-2/3 max-w-5xl mx-auto my-12 text-center px-4" id="skills">
      <div class="relative z-30">
        <a :href="`/images/doc/${locale}/CV_Kevin_Cailly.pdf`" target="_blank" class="border rounded hover:shadow p-4">{{ t('skills.resume') }}</a>
      </div>

      <div class="w-full mx-auto text-center px-4 py-6">
        <div v-if="isExperiencesEmpty">{{ t('skills.empty') }}</div>
        <div v-else>
          <Timeline :experiences="experiencesData"/>
        </div>
      </div>
    </section>

    <!-- *********************************************** -->
    <!-- ************** Portfolio Section ************** -->
    <!-- *********************************************** -->
    <div class="relative h-full overflow-hidden">
      <Parallax image="/images/portfolio.jpg" :sliced="!isMobile" zIndex="40" :speed=0.5 height="80vh" :text="t('portfolio.name')"/>
    </div>

    <section class="w-full sm:w-3/4 md:w-2/3 max-w-5xl mx-auto text-center px-4 my-36" id="portfolio">
      <h2 class="py-6 text-6xl">{{ t('portfolio.projects') }}</h2>
      <p class="opacity-60 max-w-xl mx-auto py-4">{{ t('portfolio.presentation') }}</p>

      <div v-if="isProjectsEmpty">{{ t('portfolio.empty') }}</div>
      <div v-else class="flex flex-col items-center justify-center">
        <ProjectCarousel :projects="projects"/>
      </div>
    </section>

    <!-- *********************************************** -->
    <!--  ************** Contact Section *************** -->
    <!-- *********************************************** -->
    <section class="relative h-full overflow-hidden">
      <Parallax image="/images/contact-me.jpg" :sliced="!isMobile" zIndex="40" :speed=0.5 height="80vh" :text="$t('contact.name')"/>
    </section>
  
    <section id="contact" class="py-32">
      <div class="max-w-5xl mx-auto px-6">

        <h2 class="text-4xl font-bold text-center mb-16">
          {{ t('contact.name') }}
        </h2>

        <div class="relative grid md:grid-cols-2 gap-12 items-center z-30">
          <div class="space-y-6 text-left">
            <p class="flex items-center gap-4"><PinMark /> {{ t('contact.address') }}</p>
            <p class="flex items-center gap-4"><MailMark /> {{ t('contact.mail') }}</p>
            <a href="https://www.linkedin.com/in/kevin-cailly" class="flex items-center gap-4" target="_blank">
              <LinkedinLogo/> Kevin Cailly
            </a>
            <a href="https://github.com/KevinCailly" class="flex items-center gap-4" target="_blank">
              <GithubLogo/> KevinCailly
            </a>
            <p class="opacity-70">{{ t('contact.meet_me') }}</p>
          </div>

          <!-- Map -->
          <div class="relative z-30 rounded-xl overflow-hidden shadow-xl">
            <iframe class="w-full h-[300px]" frameborder="0" scrolling="no"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.167739868164063%2C46.982594624734936%2C2.620925903320313%2C47.18457933279254&amp;layer=mapnik&amp;marker=47.083682706950036%2C2.3943328857421875">
            </iframe>
          </div> 

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useArticles } from '@/composables/useArticles';
import { useExperiences } from '@/composables/useExperiences';
import { useCurrentYear } from '@/composables/useCurrentYear';
import Parallax from '@/components/Parallax.vue';
import Timeline from '@/components/Timeline.vue';
import MailMark from '@/components/MailMark.vue';
import PinMark from '@/components/PinMark.vue';
import LinkedinLogo from '@/components/LinkedinLogo.vue';
import GithubLogo from '@/components/GithubLogo.vue';
import ProjectCarousel from '@/components/ProjectCarousel.vue';

const { t, locale } = useI18n()
const isMobile = ref(false);
const { currentYear } = useCurrentYear()
const age = ref(currentYear - 1988)
const { getByTag } = useArticles()
const { experiences } = useExperiences()
const experiencesData = ref(experiences)
const projects = ref(getByTag('projet').map(a => ({
  id: a.id,
  slug:  locale.value + '/article/' + a.id + '/' + ((locale.value === "fr") ? a.slugFR : a.slugEN),
  url: a.image,
  alt: ((locale.value === "fr") ? a.titleFR : a.titleEN),
  title: ((locale.value === "fr") ? a.titleFR : a.titleEN)
})))

const isExperiencesEmpty = computed(() => experiencesData.value.length === 0)
const isProjectsEmpty = computed(() => projects.value.length === 0)
const checkScreen = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
})

onUnmounted(() => {
  window.removeEventListener("resize", checkScreen);
});

</script>

<style scoped>

section {
  scroll-margin-top: 100px;
}

</style>
