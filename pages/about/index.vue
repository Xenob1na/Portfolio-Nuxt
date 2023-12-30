<template>
    <MainLayout>
        <div id="About" class="max-w-[1440px] mx-auto xl:mx-6">
            <div class="flex justify-between mt-[150px]">
                <div>
                    <div class="flex items-center gap-4 z-10">
                        <div class="border-b-[2px] border-b-gray-700 my-1 w-[37px]" />
                        <p class="text-black text-[18px] font-normal leading-normal">Устраивайтесь поудобнее</p>
                    </div>
                    <div class="mt-[15px] max-w-[650px] md:max-w-[850px] z-10">
                        <h1 class="text-black text-[70px] lg:text-[60px] xs:text-[45px] font-normal leading-[110%]">Привет, я Данил Громов. Front-end
                            разработчик и любитель кофе.</h1>
                    </div>
                </div>
                <div class="max-w-[550px] mt-8 md:hidden">
                    <div class="mb-8">
                        <img src="/Iam.png" alt="Обо мне" class="lg:w-[300px]">
                    </div>
                </div>
            </div>
            <AboutInfo />
            <AboutExperience />
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "../../layouts/MainLayout.vue"

useHead({
    title: "Обо мне",
    meta: [
        { name: "description", content: "Обо мне" },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
})
</script>