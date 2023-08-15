import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLocationsStore = defineStore('locations', () => {
	const weatherLocations = ref<any[]>([])

	const addLocation = (location: any) => {
		const exists = weatherLocations.value.find((loc) => loc.id === location.id)

		if (exists) return

		weatherLocations.value.push(location)
	}

	const newLocationOrder = (newOrder: any[]) => {
		console.log(newOrder, 'newOrder')

		weatherLocations.value = newOrder
	}

	// const doubleCount = computed(() => count.value * 2)

	return { weatherLocations, addLocation, newLocationOrder }
})
