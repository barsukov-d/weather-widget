<script setup lang="ts">
defineProps({
	location: {
		type: Object,
		required: true
	}
})
</script>

<template>
	<q-card flat bordered class="my-card">
		<q-card-section>
			<div class="text-h6">{{ location.name }}</div>
		</q-card-section>

		<!-- <q-card-section class="q-pt-none">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</q-card-section> -->

		<!-- <q-separator inset /> -->

		<!-- <q-card-section>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</q-card-section> -->
	</q-card>
</template>

<style scoped lang="scss"></style>
