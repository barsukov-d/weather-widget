<script setup lang="ts">
import SettingsCityList from './settings-city-list.vue'
import FormSearchLocation from './form-search-location.vue'
import FoundLocationList from './found-location-list.vue'
import { useLocations } from '@/hooks/useLocationsCoordinates'
import { useLocationsStore } from '@/stores/locations'

defineProps<{
	locationsNames?: any
}>()

const fetchLocationsCall = (result: string) => {
	fetchLocations(result)
}

const addLocation = (lat: number, lon: number) => {
	fetchLocationsByCoordinates(lat, lon)
	resetGetLocations()
}

const { locations, fetchLocations, fetchLocationsByCoordinates, resetGetLocations } = useLocations()

const locationsStore = useLocationsStore()

const newOrderLocationsNamesList = (newOrder: any) => {
	console.log(newOrder, 'newOrderLocationsNamesList')

	locationsStore.newLocationOrder(newOrder)
}
</script>

<template>
	<div class="settings-weather">
		<SettingsCityList
			:locations-names="locationsNames"
			@new-order-locations-names-list="newOrderLocationsNamesList"
		/>
		<FormSearchLocation @location-name="fetchLocationsCall" />
		<FoundLocationList :locations="locations" @add-location="addLocation" />
	</div>
</template>

<style scoped>
.settings-weather {
}
</style>
