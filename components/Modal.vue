<template>
    <div id="Modal" class="fixed z-50 bottom-0 bg-[#232323] h-screen w-full">
        <div class="w-full mx-auto max-w-[1440px] p-2">
            <div class="flex justify-end mt-[52px]">
                <div>
                    <button class="flex items-center gap-2" @click="isCloseOverlay = false">
                        <p class="text-white font-nirmal text-[24px]">Закрыть</p>
                        <Icon name="mdi:close" size="26" color="white" />
                    </button>
                </div>
            </div>

            <div class="flex justify-between mt-[160px]">
                <div class="flex flex-col">
                    <nuxt-link @click="isCloseOverlay = false" to="/" class="text-[#F9FAFB] text-[100px] font-medium leading-[83px]">Главная</nuxt-link>
                    <nuxt-link @click="isCloseOverlay = false" to="/about" class="text-[#F9FAFB] text-[100px] font-medium leading-[83px] mt-[60px]">Обо мне</nuxt-link>
                    <nuxt-link @click="isCloseOverlay = false" to="/portfolio" class="text-[#F9FAFB] text-[100px] font-medium leading-[83px] mt-[60px]">Портфолио</nuxt-link>
                </div>
                <div>
                    <h2 class="text-[#F9FAFB] text-[24px] font-semibold leading-normal">Мои контакты</h2>
                    <div class="flex flex-col gap-4 mt-6">
                        <nuxt-link to="https://github.com/Xenob1na">
                            <Icon name="mdi:github" width="40" height="40" color="white"/>
                        </nuxt-link>
                        <nuxt-link to="https://www.behance.net/gromovdanil">
                            <Icon name="mdi:behance" width="40" height="40" color="white"/>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useModalStore } from "../stores/modal"
import { storeToRefs } from 'pinia';

const { isCloseOverlay } = storeToRefs(useModalStore())
</script>