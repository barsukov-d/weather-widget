<script setup lang="ts">
defineProps<{
	locations?: any
}>()

const emit = defineEmits<{
	(e: 'add-location', lat: number, lon: number): void
}>()
</script>

<template>
	<q-list v-if="locations?.status === 1" class="list-city-search" bordered separator>
		<q-item clickable v-ripple v-for="(city, index) in locations.data" :key="index">
			<q-item-section @click="emit('add-location', city.lat, city.lon)">
				<q-item-label overline>{{ city.country }}</q-item-label>
				<q-item-label>{{ city.name }}</q-item-label>
			</q-item-section>
		</q-item>
	</q-list>
	<span class="message-error" v-if="locations?.status === 0">Not found</span>
</template>

<style scoped lang="scss">
.list-city-search {
	margin-top: 1rem;
	.list-city-search-item {
		padding: 1rem;
		margin-top: 0.5rem;
		display: flex;
		justify-content: space-between;

		border: 1px solid $primary;

		&:first-child {
			margin-top: 0;
		}

		&:hover {
			background-color: $primary;
			color: $white;
		}
	}
}
.message-error {
	margin-top: 1rem;
	color: $red;
	display: block;
}
</style>
