<script setup lang="ts">
import { ref } from 'vue'
import { matMenu, matClose } from '@quasar/extras/material-icons'
import draggable from 'vuedraggable'

const cityList = ref([
	{
		name: 'London',
		temperature: 15,
		weather: 'Cloudy'
	},
	{
		name: 'Moscow',
		temperature: 20,
		weather: 'Sunny'
	},
	{
		name: 'New York',
		temperature: 25,
		weather: 'Sunny'
	},
	{
		name: 'Paris',
		temperature: 10,
		weather: 'Rainy'
	}
])

const drag = ref<boolean>(false)

const removeAt = (index: number) => {
	cityList.value.splice(index, 1)
}
</script>
<template>
	<draggable
		v-model="cityList"
		tag="ul"
		group="meals"
		handle=".handle"
		@start="drag = true"
		@end="drag = false"
		item-key="id"
		class="settings-city-list"
	>
		<template #item="{ element: city }">
			<li class="settings-city-list-item">
				<q-icon
					class="settings-city-list-item__icon-drag handle"
					:name="matMenu"
					size="md"
				/>
				<span class="settings-city-list-item__name">{{ city.name }}</span>
				<q-btn
					class="settings-city-list-item__remove"
					square
					color="secondary"
					icon="close"
					@click="removeAt(city.id)"
				/>
			</li>
		</template>
	</draggable>
</template>

<style scoped lang="scss">
.settings-city-list {
	display: block;

	.settings-city-list-item {
		margin-bottom: 1rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		border: 1px solid $primary;

		&__icon-drag {
			margin: 1rem;
			cursor: move;
		}

		&__name {
			margin-left: 1rem;
		}

		&__remove {
			margin: 1rem;
			width: 1rem;
			height: 1rem;
		}
	}
}
</style>
