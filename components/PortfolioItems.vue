<template>
    <div
        class="mt-4 md:mt-12 p-6 md:p-8 shadow-inset-white dark:shadow-none rounded-3xl flex flex-col md:flex-row items-center">
        <img :src="portfolio.src" :alt="portfolio.alt"
            class="aspect-video md:w-3/5 object-cover w-full h-auto rounded-2xl">
        <div class="mt-4 md:mt-0 md:w-2/5 md:ml-12 w-full">
            <h4 class="text-2xl font-bold font-space mb-2 md:mb-4">{{ portfolio.title }}</h4>
            <p class="mb-4">{{ portfolio.description }}</p>
            <p class="mb-4">Back-end: {{ portfolio.Backend }}</p>
            <p class="mb-4">Front-end: {{ portfolio.Frontend }}</p>
            <nuxt-link to="" target="_blank" class="group flex cursor-pointer bg-black text-white rounded-2xl px-4 py-5 max-w-[140px]">Посетить
                <div class="mb-0.5 duration transition-all ml-2 md:ml-4 group-hover:ml-5">
                    <Icon name="mdi:arrow-right" />
                </div>
            </nuxt-link> 
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    portfolio: Object
})
</script>