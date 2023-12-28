<template>
  <div>
      <NuxtPage />

      <Modal :class="[
        { 'max-h-[100vh] transition-all duration-200 ease-in visible': isCloseOverlay },
        { 'max-h-0 transition-all duration-200 ease-out invisible': !isCloseOverlay },
      ]" />
      
  </div>
</template>

<script setup>
import { useModalStore } from "./stores/modal"
import { storeToRefs } from 'pinia';

const { isCloseOverlay } = storeToRefs(useModalStore())
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>