<template>
    <MainLayout>
        <div id="Portfolio" class="max-w-[1440px] mx-auto">
            <div class="mt-[150px] px-6">
                <div class="flex items-center gap-4 z-10">
                    <div class="border-b-[2px] border-b-gray-700 my-1 w-[37px]" />
                    <p class="text-black text-[18px] font-normal leading-normal">Устраивайтесь поудобнее</p>
                </div>
                <div class="mt-[15px] max-w-[650px] z-10">
                    <h1 class="text-black text-[70px] lg:text-[60px] xs:text-[45px] font-normal leading-[110%]">Мои проекты</h1>
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
            Frontend: "NuxtJS(VueJS), TS, TailwindCSS, Pinia",
            link: 'https://cleaning-plum.vercel.app/'
        },
        {
            id: 2,
            title: "CRUD Blog",
            description: "CRUD опреации для блога",
            src: "/crud.png",
            alt: "crud",
            Backend: "TS, Mysql",
            Frontend: "NuxtJS(VueJS), TS, TailwindCSS",
            link: 'https://github.com/Xenob1na/Nuxt-Mysql-CRUD'
        },
        {
            id: 3,
            title: "NLP",
            description: "NLP - Landing page, для ознакомления и записи на онлайн курс по программированию, имеется возможность записать на курс, через модалку, данные отправляються в crm Email.js",
            src: "/infoIT.png",
            alt: "IT курсы",
            Backend: "EmailJS",
            Frontend: "VueJS, TailwindCSS, VueUse",
            link: 'https://nlp-deploy.web.app/'
        },
        {
            id: 4,
            title: "Магнум",
            description: "Магнум - компания занимающаяся транспортными перевозками по направлению ХМАО и ЯНАО.",
            src: "/magnum.png",
            alt: "Логистика",
            Backend: "Не писался",
            Frontend: "VueJS, TailwindCSS, VueUse",
            PS: "Внимание: Является прототипом сайта, реального проекта",
            link: 'https://xenob1na.github.io/Vue-Magnum/'
        },
        {
            id: 5,
            title: "Todo List",
            description: "Todo List - приложение для заметок. Имеет возможность создания, удаления заметок. Также смена цветовой темы",
            src: "/todo.png",
            alt: "todo",
            Backend: "Не писался",
            Frontend: "VueJS, Scss",
            link: 'https://xenob1na.github.io/Vue-ToDO/'
        },
        {
            id: 6,
            title: "Notes App",
            description: "Notes App - приложение для заметок. Имеет возможность создания, редактирования, удаления заметок. Также реализована возможность поиска заметок. Приложение реализовано на VueJS",
            src: "/NotesApp.png",
            alt: "Заметки",
            Backend: "Не писался",
            Frontend: "VueJS, TailwindCSS, Pinia",
            link: 'https://xenob1na.github.io/Notes-App/'
        },
        {
            id: 7,
            title: "Worku",
            description: "Worku - пет проект, ознакомление с GulpJS",
            src: "/worko.png",
            alt: "Worku",
            Backend: "Не писался",
            Frontend: "GulpJS, Html, Scss, JavaScript",
            link: 'https://xenob1na.github.io/Worku/dist/index.html'
        }
    ]
})
</script>