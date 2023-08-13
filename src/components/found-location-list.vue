<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
	locations: any
}>()
</script>

<template>
	<ul class="list-city-search">
		<li v-for="(city, index) in locations" :key="index">
			<span>{{ city.name }}</span>
			/
			<span>{{ city.region }}</span>
		</li>
	</ul>
</template>

<style scoped></style>
