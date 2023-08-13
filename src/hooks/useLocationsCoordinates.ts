import { ref } from 'vue'
import { locationsService } from '@/shared/services/locations'
import { useSpinnerStore } from '@/stores/spinner'
const spinnerStore = useSpinnerStore()

export const useLocations = () => {
	const locations = ref()

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

	return {
		fetchLocations,
		locations
	}
}
