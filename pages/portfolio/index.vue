<template>
    <MainLayout>
        <div id="Portfolio" class="max-w-[1440px] mx-auto">
            <div class="mt-[150px]">
                <div class="flex items-center gap-4 z-10">
                    <div class="border-b-[2px] border-b-gray-700 my-1 w-[37px]" />
                    <p class="text-black text-[18px] font-normal leading-normal">Устраивайтесь поудобнее</p>
                </div>
                <div class="mt-[15px] max-w-[650px] z-10">
                    <h1 class="text-black text-[70px] font-normal leading-[110%]">Мои проекты</h1>
                </div>
            </div>
            <PortfolioItems v-for="portfolios in portfolio" :key="portfolios.id" :portfolio="portfolios" />
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "../../layouts/MainLayout.vue"

useHead({
    title: "Портфолио",
    meta: [
        { name: "description", content: "Портфолио" },
    ]
})

const portfolio = ref([])

onBeforeMount(() => {
    portfolio.value = [
        {
            id: 1,
            title: "Ocean Clening",
            description: "Сайт клининговой компании, есть возможность формирования заказа, на определенную услугу, все данный попадают в админ панель и админ перевазванивает вам. P.S: На админке стоит пароль поэтому там секрет.",
            src: "/clening.png",
            alt: "clening",
            Backend: "NodeJS(Express), Mysql",
            Frontend: "NuxtJS(VueJS), TailwindCSS",
        },
        {
            id: 2,
            title: "Ocean Clening",
            description: "Сайт клининговой компании, есть возможность формирования заказа, на определенную услугу, все данный попадают в админ панель и админ перевазванивает вам. P.S: На админке стоит пароль поэтому там секрет.",
            src: "/clening.png",
            alt: "clening",
            Backend: "NodeJS(Express), Mysql",
            Frontend: "NuxtJS(VueJS), TailwindCSS",
        }
    ]
})
</script>