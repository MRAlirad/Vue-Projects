<template>
	<div class="learning-resources-segment">
		<LearningResource
			v-for="{id, title, description, link} in resources"
			:key="id"
			:id="id"
			:title="title"
			:description="description"
			:link="link"
		/>
	</div>
    <!-- <p v-show="resources.length === 0">No learnig resources</p> -->
</template>

<script>
	import LearningResource from './LearningResource.vue';
	export default {
		name: 'StoredResources',
		components: {
			LearningResource,
		},
		inject: ['resources'],
	};
</script>

<style scoped>
	.learning-resources-segment {
		margin: 0;
		padding: 0;
		margin: auto;
		max-width: 40rem;
	}

    p {
        text-align: center;
    }
</style>
