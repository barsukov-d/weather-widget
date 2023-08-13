import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSpinnerStore = defineStore('spinner', () => {
	const spinner = ref(false)

	return { spinner }
})
