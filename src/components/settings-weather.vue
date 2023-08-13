<script setup lang="ts">
import { ref } from 'vue'

import SettingsCityList from './settings-city-list.vue'
import FormSearchLocation from './form-search-location.vue'
import FoundLocationList from './found-location-list.vue'
import AppSpinner from './app-spinner.vue'
import { useLocations } from '@/hooks/useLocationsCoordinates'
const searchResult = ref([])

const setSearchResult = (result: any) => {
	searchResult.value = result
}
</script>

<template>
	<div class="settings-weather">
		<SettingsCityList />
		<FormSearchLocation @search-result="setSearchResult" />
		<FoundLocationList :locations="searchResult" />
	</div>
</template>

<style scoped>
.settings-weather {
	width: 28rem;
}
</style>
