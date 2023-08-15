import { api } from '@/shared/axios'

export const locationsService = {
	getLocations: async (locationName: string) => {
		try {
			const response = await api.get(
				`/geo/1.0/direct?q=${locationName}&limit=5&appid=0c776580506fda1007e4584575cfaea2`
			)

			const result = {
				status: 0,
				data: [] as any
			}

			if (response.data.length > 0) {
				result.status = 1
				response.data.map((location: any) => {
					result.data.push({
						name: location.name,
						country: location.country,
						lat: location.lat,
						lon: location.lon
					})
				})
			}

			if (response.data.length === 0) {
				result.status = 0
			}

			return result
		} catch (error: unknown) {
			throw new Error()
		}
	},

	getLocationByCoordinates: async (lat: number, lon: number) => {
		try {
			const response = await api.get(
				// `/geo/1.0/direct?q=${locationName}&limit=5&appid=0c776580506fda1007e4584575cfaea2`
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0c776580506fda1007e4584575cfaea2`
			)

			return response
		} catch (error: unknown) {
			throw new Error()
		}
	}
}
