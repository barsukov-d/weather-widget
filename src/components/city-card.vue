<script setup lang="ts">
defineProps({
	city: {
		type: Object,
		required: true
	}
})
</script>

<template>
	<div>
		<h2>{{ city.name }}</h2>
		<p>Temperature: {{ city.temperature }}°C</p>
		<p>Weather: {{ city.weather }}</p>
	</div>
</template>

<style scoped></style>
