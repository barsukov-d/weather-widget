import { api } from '@/shared/axios'

export const locationsService = {
	getLocations: async (locationName: string) => {
		try {
			const response = await api.get(
				`/geo/1.0/direct?q=${locationName}&limit=5&appid=0c776580506fda1007e4584575cfaea2`
			)

			const result: any[] = []

			response.data.map((location: any) => {
				result.push({
					name: location.name,
					lat: location.lat,
					lon: location.lon
				})
			})

			return result
		} catch (error: unknown) {
			throw new Error()
		}
	}
}
