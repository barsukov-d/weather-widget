<script setup lang="ts">
import CityCard from './city-card.vue'

const cityList = [
	{
		name: 'London',
		temperature: 15,
		weather: 'Cloudy'
	},
	{
		name: 'Paris',
		temperature: 20,
		weather: 'Sunny'
	},
	{
		name: 'New York',
		temperature: 25,
		weather: 'Sunny'
	},
	{
		name: 'Moscow',
		temperature: 10,
		weather: 'Rainy'
	}
]
</script>

<template>
	<ul class="city-list">
		<li v-for="(city, index) of cityList" :key="index" class="city-list__item">
			<CityCard :city="city" />
		</li>
	</ul>
</template>

<style scoped>
.city-list {
	&__item {
		margin-bottom: 1rem;
	}
}
</style>
