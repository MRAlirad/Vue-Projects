<template>
	<div class="contact-item">
		<strong>{{ name }}:</strong>
		{{ info }}
	</div>
</template>

<script>
	export default {
		name: 'ContactItems',
		props: {
			name: String,
			info: String,
		},
	};
</script>

<style scoped>
	.contact-item {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		border-radius: 10px;
		padding: 1rem;
		text-align: center;
		width: 100%;
		max-width: 40rem;
	}
</style>
