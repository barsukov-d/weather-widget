<script setup lang="ts">
import { watch, onMounted, ref } from 'vue'
import { matMenu } from '@quasar/extras/material-icons'
import draggable from 'vuedraggable'

const props = defineProps<{
	locationsNames: any
}>()

const emit = defineEmits<{
	(e: 'new-order-locations-names-list', loc: any): void
}>()

const locationsNamesList = ref<any[]>([])

onMounted(() => {
	locationsNamesList.value = props.locationsNames
})

watch(
	() => locationsNamesList.value,
	(newValue) => {
		console.log(newValue, 'new-order-locations-names-list')

		emit('new-order-locations-names-list', newValue)
	},
	{ deep: true }
)

const drag = ref<boolean>(false)

const removeAt = (index: number) => {
	locationsNamesList.value = locationsNamesList.value.filter((item) => item.id !== index)
}
</script>
<template>
	<draggable
		v-model="locationsNamesList"
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
