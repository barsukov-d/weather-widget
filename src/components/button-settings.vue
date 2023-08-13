<script setup lang="ts">
defineProps({
	isOpen: {
		type: Boolean,
		required: true
	}
})
</script>

<template>
	<q-btn class="button-settings" square color="primary" :icon="isOpen ? 'settings' : 'close'" />
</template>

<style scoped></style>
