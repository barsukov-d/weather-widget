<script setup lang="ts">
import { ref, watch } from 'vue'
import { matArrowForward } from '@quasar/extras/material-icons'
import { useLocations } from '@/hooks/useLocationsCoordinates'

const emit = defineEmits<{
	(e: 'search-result', locations: any): void
}>()

const { locations, fetchLocations } = useLocations()
const locationName = ref('')

watch(
	() => locations.value,
	() => {
		emit('search-result', locations.value)
	}
)
</script>

<template>
	<form class="search-form">
		<q-input filled v-model="locationName" label="Add location" />
		<q-btn
			@click="fetchLocations(locationName)"
			square
			color="primary"
			:icon="matArrowForward"
		/>
	</form>
</template>

<style lang="scss" scoped>
.search-form {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	label {
		margin-right: 1rem;
		width: 100%;
		display: block;
		span {
			display: block;
			margin-bottom: 0.5rem;
		}
		input {
			padding: 0.5rem;
			width: 100%;
			display: block;
			border: 1px solid $primary;
		}
	}
}
</style>
