<script setup lang="ts">
import CityCard from './city-card.vue'

defineProps<{
	locationWeatherList: any
}>()
</script>

<template>
	<ul class="city-list">
		<li v-for="(location, index) of locationWeatherList" :key="index" class="city-list__item">
			<CityCard :location="location" />
		</li>
	</ul>
</template>

<style scoped lang="scss">
.city-list {
	&__item {
		margin-top: 1rem;
		&:first-child {
			margin-top: 0;
		}
	}
}
</style>
