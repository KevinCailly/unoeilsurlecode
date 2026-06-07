<template>
    <div :class="[routeClass,'fixed eye-container']" 
        ref="eyeContainer"
        :style="containerStyle"
        @mousemove="handleMouseMove"
        @mouseleave="resetPupil">
        <canvas ref="logoCanvas" :width="size" :height="size"></canvas>
        <div class="pupil" 
            :style="pupilStyle"
            ref="pupil"></div>
    </div>
</template>

<script setup>
import {ref, computed, onMounted, onUnmounted, onBeforeUnmount, nextTick} from 'vue'

const props = defineProps({
    routeClass: {
        type: String,
        required: false,
    },
    size: {
        type: Number,
        default: 500
    },
    irisCenterX: {
        type: Number,
        default: null
    },
    irisCenterY: {
        type: Number,
        default: null
    }
})

const eyeContainer = ref(null)
const logoCanvas = ref(null)

const centerX = ref(200)
const centerY = ref(300)
const maxPupilMovement = ref(13)
const pupilX = ref(0)
const pupilY = ref(0)
const pupilSize = ref(120)
const minPupilSize = ref(60)
const maxPupilSize = ref(120)
const zIndex = ref(20)
const isMobile = ref(window.innerWidth < 1640)
const opacity = ref(1)

const pupilStyle = computed(() => ({
    left: `${pupilX.value}px`,
    top: `${pupilY.value}px`,
    width: `${pupilSize.value}px`,
    height: `${pupilSize.value}px`
}))

const containerStyle = computed(() => ({
    zIndex: zIndex.value,
    opacity: isMobile.value ? 0.2 : opacity.value,
    left: isMobile.value ? '0%' : '70%'
}))

const loadLogo = () => {
    const canvas = logoCanvas.value
    const ctx = canvas.getContext('2d')
    const img = new Image()
    
    img.onload = () => {
        ctx.drawImage(img, 0, 0, props.size, props.size)
        positionPupilInitial()
    };
    
    img.onerror = () => {
        console.error('Erreur de chargement du logo')
        drawPlaceholder(ctx)
    };
    
    img.src = "/images/eye.png"
}

const drawPlaceholder= (ctx) => {
    ctx.fillStyle = '#f0f0f0'
    ctx.fillRect(0, 0, props.size, props.size)
    ctx.fillStyle = '#333'
    ctx.font = '14px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('Logo non trouvé', props.size / 2, props.size / 2)
}

const positionPupilInitial = () => {
    pupilSize.value = maxPupilSize.value
    pupilX.value = centerX.value - pupilSize.value / 2
    pupilY.value = centerY.value - pupilSize.value / 2
}

const handleMouseMove = (e) => {
    const rect = eyeContainer.value.getBoundingClientRect()
    
    const mouseX = e.clientX
    const mouseY = e.clientY
    
    const irisAbsoluteX = rect.left + centerX.value
    const irisAbsoluteY = rect.top + centerY.value
    
    const deltaX = mouseX - irisAbsoluteX;
    const deltaY = mouseY - irisAbsoluteY;
    
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    const moveDistance = Math.min(distance / 4, maxPupilMovement.value);
    
    const distanceRatio = Math.min(distance / 500, 1)
    pupilSize.value = minPupilSize.value + (maxPupilSize.value - minPupilSize.value) * (1 - distanceRatio)
    
    pupilX.value = centerX.value + moveDistance * Math.cos(angle) - pupilSize.value / 2;
    pupilY.value = centerY.value + moveDistance * Math.sin(angle) - pupilSize.value / 2;
}

const resetPupil = () => {
    positionPupilInitial()
}

const handleScroll = () => {
    const scrollY = window.scrollY
  
    if (scrollY < 50) {
        zIndex.value = 20
        opacity.value = 1
    } else {
        zIndex.value = 10
        opacity.value = 0.2
    }
}

onMounted (async () => {
    if (props.irisCenterX !== null) {
        centerX.value = props.irisCenterX
    }
    if (props.irisCenterY !== null) {
        centerY.value = props.irisCenterY
    }
  
    loadLogo()

    document.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
  
    window.addEventListener("resize", updateIsMobile)
    await nextTick()
})

onUnmounted(() => {
    window.removeEventListener("resize", updateIsMobile)
})

onBeforeUnmount (() => {
    document.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('scroll', handleScroll)
})

function updateIsMobile() {
    isMobile.value = window.innerWidth < 1640
}
</script>

<style scoped>
.eye-container {
    display: inline-block;
    z-index: 999;
    top: 15%;
    opacity: 0.2;
    border-radius: 15%;
    background-color: var(--logo-bg);
}

.pupil {
    position: absolute;
    background: black;
    border-radius: 50%;
    transition: all 0.1s ease-out;
    pointer-events: none;
}
</style>