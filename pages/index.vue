<template>
    <MainLayout>
        <section id="Home">
            <div class="max-w-[1440px] mx-auto xl:mx-6">
                <div>
                    <div class="z-0 fixed top-10 transform left-1/2 -translate-x-1/2">
                        <div class="blur-blob transition">
                        </div>
                    </div>
                    <div class="blur-blob sm:hidden"></div>
                </div>
                <div class="flex justify-between mt-[180px] lg:flex lg:flex-col">
                    <div>
                        <div class="flex items-center gap-4 z-10">
                            <div class="border-b-[2px] border-b-gray-700 my-1 w-[37px]" />
                            <p class="text-black text-[18px] font-normal leading-normal">Привет, я Данил Громов</p>
                        </div>
                        <div class="mt-[15px] max-w-[613px] z-10">
                            <h1 class="text-black text-[100px] font-normal sm:text-[80px] xs:text-[60px] leading-[110%]">Добро пожаловать</h1>
                        </div>
                        <div class="flex items-center gap-4 mt-[15px]">
                            <div class="border-b-[2px] border-b-gray-700 my-1 w-[37px]" />
                            <nuxt-link to="https://github.com/Xenob1na">
                                <Icon name="mdi:github" width="40" height="40" />
                            </nuxt-link>
                            <nuxt-link to="https://www.behance.net/gromovdanil">
                                <Icon name="mdi:behance" width="40" height="40" />
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="max-w-[486px] z-10 lg:mt-8 lg:max-w-[613px]">
                        <div class="border-b-[2px] border-b-gray-700 my-1 w-[37px]" />
                        <article class="text-black text-[24px] xs:text-[18px] font-normal leading-normal">
                            Я занимаюсь версткой и разработкой клиентской части продуктов, имею опыт работы с компаниями в
                            разных направлениях. Тем самым помогу вам в реализации ваших проектов.
                        </article>
                    </div>
                </div>
                <div class="flex justify-end lg:mt-6">
                    <span class="animate-bounce">
                        <img src="/s.png" alt="circle" />
                    </span>
                </div>
            </div>
        </section>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "../layouts/MainLayout.vue"

useHead({
    title: "Главная",
    meta: [
        { name: "description", content: "Главная" },
    ]
})
</script>

<style scoped>
.blur-blob {
    position: absolute;
    opacity: 0.5;
    width: 400px;
    aspect-ratio: 1/1;
    animation: animate 5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate forwards;
    filter: blur(40px);
    z-index: 1;
    background: linear-gradient(47deg,
            rgba(255, 88, 139, 1) 21%,
            rgb(0 164 173) 67%,
            rgba(118, 74, 166, 1) 81%);
}

@keyframes animate {
    0% {
        translate: 40% -25%;
        border-radius: 60% 40% 30% 70% / 100% 85% 92% 74%;
    }

    50% {
        translate: 0% 13%;
        border-radius: 20% 71% 47% 70% / 81% 15% 22% 54%;
        rotate: 41deg;
        scale: 1.15;
    }

    100% {
        translate: -45% 39%;
        border-radius: 100% 75% 92% 74% / 60% 80% 30% 70%;
        rotate: -60deg;
        scale: 1.05;
    }
}
</style>