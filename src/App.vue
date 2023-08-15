<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { computed } from 'vue'
import ButtonSettings from './components/button-settings.vue'
import locationsWeather from './components/locations-weather.vue'
import SettingsWeather from './components/settings-weather.vue'
import AppSpinner from './components/app-spinner.vue'
import { useSpinnerStore } from '@/stores/spinner'
import { useLocationsStore } from '@/stores/locations'
import { useLocations } from '@/hooks/useLocationsCoordinates'

const buttonSettings = ref<boolean>(true)
const spinnerStore = useSpinnerStore()
const locationsStore = useLocationsStore()

const { fetchLocationsByCoordinates } = useLocations()
onMounted(() => {
	fetchLocationsByCoordinates(51.5073219, -0.1276474)
})

const locationWeatherList = computed(() => {
	return locationsStore.weatherLocations
})
</script>

<template>
	locationsNames
	<div class="weather-widget">
		<ButtonSettings @click="buttonSettings = !buttonSettings" :is-open="buttonSettings" />
		<locationsWeather v-if="buttonSettings" :location-weather-list="locationWeatherList" />
		<SettingsWeather v-else :locations-names="locationWeatherList" />
		<AppSpinner v-if="spinnerStore.spinner" />
	</div>
</template>

<style lang="scss" scoped>
.weather-widget {
	margin: 1rem;
	padding: 2rem 7rem 2rem 2rem;
	width: 600px;

	position: relative;

	border: 1px solid $primary;
	box-shadow:
		20px 20px 60px #d9d9d9,
		-20px -20px 60px #ffffff;

	.button-settings {
		position: absolute;
		top: 2rem;
		right: 2rem;
	}
}
</style>
