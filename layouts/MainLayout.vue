<template>
    <section id="layout-main" class="mt-10">
        <header class="max-w-[1440px] mx-auto flex justify-between items-center mb-10 xl:mx-6">
            <nuxt-link to="/">
                <div>
                    <p class="text-black text-[30px] font-semibold leading-[82.336%]">DG.</p>
                </div>
            </nuxt-link>
            <div class="z-[100]">
                <button class="flex items-center gap-4" @click="isCloseOverlay = true">
                    <p class="text-black text-[24px] font-normal leading-[82.336%]">Меню</p>
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H12M4 18H20" stroke="#111827" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </span>
                </button>
            </div>
        </header>
        <div class="border-b-[2px] border-b-gray-700 my-1" />
        <slot />
    </section>
</template>

<script setup>
import { useModalStore } from "../stores/modal"
import { storeToRefs } from 'pinia';

const { isCloseOverlay } = storeToRefs(useModalStore())
</script>