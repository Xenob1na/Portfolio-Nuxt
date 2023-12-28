import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    isCloseOverlay: false,
  }),
});