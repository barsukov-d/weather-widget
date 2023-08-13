<script setup lang="ts">
import ButtonSettings from './components/button-settings.vue'
import CityList from './components/city-list.vue'
import SettingsWeather from './components/settings-weather.vue'
import AppSpinner from './components/app-spinner.vue'
import { useSpinnerStore } from './stores/spinner'

import { ref } from 'vue'

const buttonSettings = ref<boolean>(true)

const spinnerStore = useSpinnerStore()
</script>

<template>
	<div class="weather-widget">
		<ButtonSettings @click="buttonSettings = !buttonSettings" :is-open="buttonSettings" />
		<CityList v-if="buttonSettings" />
		<SettingsWeather v-else />
		<AppSpinner v-if="spinnerStore.spinner" />
	</div>
</template>

<style lang="scss" scoped>
.weather-widget {
	margin: 1rem;
	padding: 2rem;
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
