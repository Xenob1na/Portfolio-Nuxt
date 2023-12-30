<template>
    <div
        class="mt-4 p-6 rounded-3xl flex gap-7 lg:flex-col items-center">
        <img :src="portfolio.src" :alt="portfolio.alt"
            class="aspect-video  object-cover w-full h-auto rounded-2xl">
        <div class="mt-4 w-full">
            <h4 class="text-2xl text-black font-bold  mb-2">{{ portfolio.title }}</h4>
            <p class="mb-4 text-black text-[18px] font-normal">{{ portfolio.description }}</p>
            <p class="mb-4"><i>{{ portfolio.PS }}</i></p>
            <p class="mb-4 text-black text-[18px] font-normal">Back-end: {{ portfolio.Backend }}</p>
            <p class="mb-4 text-black text-[18px] font-normal">Front-end: {{ portfolio.Frontend }}</p>
            <nuxt-link :to="portfolio.link" target="_blank" class="group flex cursor-pointer bg-black text-white rounded-2xl px-4 py-5 max-w-[140px]">Посетить
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