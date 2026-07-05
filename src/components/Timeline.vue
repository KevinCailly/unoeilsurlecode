<template>
    <section class="max-w-5xl mx-auto px-6 py-16">
        <!-- Line -->
        <div class="relative z-30">
            <div class="absolute top-0 left-1/2 w-0.5 h-full transform -translate-x-1/2 bg-gray-300 dark:bg-gray-600"></div>

            <!-- Timeline items -->
            <div v-for="(exp, index) in experiencesData" :key="exp.id"
                class="relative grid grid-cols-1 md:grid-cols-3 items-start mb-16">
                
                <!-- AXE + POINT -->
                <div class="hidden md:flex flex-col items-center col-start-2 relative">
                    <!-- Ligne -->
                    <div class="absolute top-0 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>

                    <!-- Point -->
                    <div class="relative z-10 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-white dark:ring-gray-900 mt-2"></div>
                </div>

                <!-- POINT MOBILE -->
                <div class="flex md:hidden justify-center mb-4">
                    <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>

                <!-- CARD -->
                <div :ref="el => items[index] = el" @click="flipped[index] = !flipped[index]"
                    class="experience-card col-span-1 md:col-span-1 max-w-md w-full"
                    :class="[isEven(exp.id) ? 'md:col-start-1' : 'md:col-start-3', { 'is-visible': visible[index] }, { 'is-flipped': flipped[index] }]">
                    <div class="card-inner">

                        <!-- FACE AVANT -->
                        <div class="card-front">
                            <h3 class="text-xl font-semibold mb-2">
                                {{ locale === 'fr' ? exp.role.fr : exp.role.en }}
                            </h3>
                            <div class="text-sm opacity-90 mb-1">
                                {{ exp.start_date }} - {{ exp.end_date || t('skills.today') }}
                            </div>
                            <div class="text-sm opacity-90 mb-4">
                                {{ exp.company }} - {{ exp.location }}
                            </div>
                            <p class="text-sm leading-relaxed">
                                {{ locale === 'fr' ? exp.description.fr : exp.description.en }}
                            </p>
                            <p class="mt-auto pt-4 text-xs opacity-70 text-center italic">
                                {{ t('skills.clickForMore') }}
                            </p>
                        </div>

                        <!-- FACE ARRIÈRE -->
                        <div class="card-back">
                            <button class="flip-back-btn" @click.stop="flipped[index] = false" :aria-label="t('skills.back')">
                                ← {{ t('skills.back') }}
                            </button>

                            <div class="mt-16 overflow-y-auto h-full pb-8">
                                <div class="mb-4">
                                    <h4 class="text-sm font-bold text-orange mb-2">
                                        {{ t('skills.hard skills') }}
                                    </h4>
                                    <div class="flex flex-wrap gap-2">
                                        <span v-for="skill in (locale === 'fr' ? exp.hard_skills.fr : exp.hard_skills.en)" :key="skill"
                                            class="bg-orange-bg text-orange-text px-3 py-1 rounded-full text-xs">
                                            {{ skill }}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <h4 class="text-sm font-bold text-indigo mb-2">
                                        {{ t('skills.soft skills') }}
                                    </h4>
                                    <div class="flex flex-wrap gap-2">
                                        <span v-for="skill in (locale === 'fr' ? exp.soft_skills.fr : exp.soft_skills.en)" :key="skill"
                                            class="bg-indigo-bg text-indigo-text px-3 py-1 rounded-full text-xs">
                                            {{ skill }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, watchEffect, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
    experiences: {
        type: Array,
        required: true,
        default: () => []
    }
})

const { t, locale } = useI18n()

const visible = ref([])
const flipped = ref([])
const items = ref([])

const isEven = (id) => id % 2 === 0

const experiencesData = computed(() => {
    return props.experiences || []
})

watchEffect(async () => {
    if (experiencesData.value.length > 0) {
        flipped.value = experiencesData.value.map(() => false)

        await nextTick()

        if (items.value.length > 0) {
            visible.value = experiencesData.value.map(() => false)

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const index = items.value.indexOf(entry.target)
                            if (index !== -1) {
                                visible.value[index] = true
                            }
                        }
                    })
                },
                { threshold: 0.2 }
            )

            items.value.forEach((el) => {
                if (el) observer.observe(el)
            })

            return () => {
                observer.disconnect()
            }
        }
    }
})
</script>

<style scoped>
.experience-card {
    min-height: 360px;
    perspective: 1000px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.experience-card.is-visible {
    opacity: 1;
    transform: translateY(0);
}

/* Animation entrée propre */
.experience-card {
    transform: translateY(40px);
}

.card-inner {
    position: relative;
    width: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.experience-card.is-flipped .card-inner {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    position: relative;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 0.75rem;
    padding: 1.5rem;
    display: block; /* 🔥 important */
}

.card-front {
    /*background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);*/
    background: #111827;  /* Rajout */
    color: white;
}

.card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    color: #333;
    transform: rotateY(180deg);
    overflow: hidden;
}

@media (prefers-color-scheme: dark) {
    .card-back {
        background: #1f2937;
        color: #f3f4f6;
    }
}

.flip-back-btn {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: #667eea;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 0.875rem;
    transition: background 0.3s;
    z-index: 10;
}

.flip-back-btn:hover {
    background: #5568d3;
}

@media (max-width: 768px) {
    .experience-card {
        min-height: 250px;
    }

    .card-front,
    .card-back {
        padding: 1rem;
        font-size: 0.875rem;
    }
}
</style>