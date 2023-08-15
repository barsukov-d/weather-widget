<script setup lang="ts">
import { ref, watch } from 'vue'
import { matArrowForward } from '@quasar/extras/material-icons'

const emit = defineEmits<{
	(e: 'location-name', locations: any): void
}>()

const locationName = ref('')

const onSubmit = () => {
	emit('location-name', locationName.value)

	locationName.value = ''
}
</script>

<template>
	<form class="search-form" @submit.prevent="onSubmit()">
		<q-input filled v-model="locationName" label="Add location" />
		<q-btn @click="onSubmit()" square color="primary" :icon="matArrowForward" />
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

	.q-btn {
		height: 3.5rem;
	}
}
</style>
