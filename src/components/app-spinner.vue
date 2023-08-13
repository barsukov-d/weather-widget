<script setup lang="ts"></script>

<template>
	<div class="spinner">
		<q-spinner-gears color="primary" size="2em" />
		<q-tooltip :offset="[0, 8]">QSpinnerGears</q-tooltip>
	</div>
</template>

<style scoped lang="scss">
.spinner {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	z-index: 3;

	background-color: rgba(0, 0, 0, 0.5);
}
</style>
