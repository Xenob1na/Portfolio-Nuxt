<template>
    <MainLayout>
        <div>
            <h1>Portfolio</h1>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "../../layouts/MainLayout.vue"

useHead({
    title: "Портфолио",
    meta: [
        { name: "description", content: "Портфолио" },
    ]
})
</script>