import { ref } from 'vue'
import { locationsService } from '@/shared/services/locations'
import { useSpinnerStore } from '@/stores/spinner'

import { useLocationsStore } from '@/stores/locations'

export const useLocations = () => {
	const locations = ref()
	const spinnerStore = useSpinnerStore()
	const locationsStore = useLocationsStore()

	const fetchLocations = async (locationName: string) => {
		try {
			spinnerStore.spinner = true
			locations.value = await locationsService.getLocations(locationName)
		} catch (error) {
			throw new Error()
		} finally {
			spinnerStore.spinner = false
		}
	}

	const resetGetLocations = () => {
		locations.value = []
		console.log(locations.value, 'reset')
	}

	const fetchLocationsByCoordinates = async (lat: number, lon: number) => {
		try {
			spinnerStore.spinner = true
			const weatherLocation = await locationsService.getLocationByCoordinates(lat, lon)

			locationsStore.addLocation(weatherLocation.data)
		} catch (error) {
			throw console.log(error)
		} finally {
			spinnerStore.spinner = false
		}
	}

	return {
		fetchLocations,
		locations,
		resetGetLocations,
		fetchLocationsByCoordinates
	}
}
