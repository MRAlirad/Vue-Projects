<template>
	<div class="segment">
		<Button
			text="Stored Resources"
			:mode="storedResButtonMode"
			@on-click="setSelectedTab('stored-resources')"
		/>
		<Button
			text="Add Resource"
			:mode="addResButtonMode"
			@on-click="setSelectedTab('add-resource')"
		/>
	</div>
	<AddResource v-show="selectedTab === 'add-resource'" />
	<StoredResources v-show="selectedTab === 'stored-resources'" />
</template>

<script>
	import Button from './Button.vue';
	import AddResource from './AddResource.vue';
	import StoredResources from './StoredResources.vue';

	export default {
		name: 'Resources',
		components: {
			Button,
			AddResource,
			StoredResources,
		},
		data() {
			return {
				selectedTab: 'stored-resources',
				storedResources: [
					{
						id: 123465798,
						title: 'Official Guide',
						description: 'The official Vue.js documentation.',
						link: 'https://vuejs.org',
					},
					{
						id: 987654321,
						title: 'Google',
						description: 'Learn to google...',
						link: 'https://google.org',
					},
				],
			};
		},
		provide() {
			return {
				resources: this.storedResources,
				addResource: this.addResource,
				deleteResource: this.removeResource,
			};
		},
		computed: {
			storedResButtonMode() {
				return this.selectedTab === 'stored-resources' ? null : 'outline';
			},
			addResButtonMode() {
				return this.selectedTab === 'add-resource' ? null : 'outline';
			},
		},
		methods: {
			setSelectedTab(tab) {
				this.selectedTab = tab;
			},
			addResource({ title, description, link }) {
				this.storedResources.unshift({
					id: Date.now(),
					title,
					description,
					link,
				});
				this.selectedTab = 'stored-resources';
			},
			removeResource(resId) {
				const resIndex = this.storedResources.findIndex(res => res.id === resId);
				this.storedResources.splice(resIndex, 1);
			},
		},
	};
</script>

<style scoped>
	.segment {
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
		margin: 2rem auto;
		max-width: 40rem;
	}
</style>
