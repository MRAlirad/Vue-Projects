<template>
	<form @submit.prevent="submitData">
		<div class="form-control">
			<label for="title">Title</label>
			<input
				id="title"
				name="title"
				type="text"
				ref="titleInput"
			/>
		</div>
		<div class="form-control">
			<label for="description">Description</label>
			<textarea
				id="description"
				name="description"
				rows="3"
				ref="descInput"
			></textarea>
		</div>
		<div class="form-control">
			<label for="link">Link</label>
			<input
				id="link"
				name="link"
				type="url"
				ref="linkInput"
			/>
		</div>
		<div>
			<Button
				text="Add Resource"
				type="submit"
			/>
		</div>
	</form>
</template>

<script>
	import Button from './Button.vue';

	export default {
		name: 'AddResource',
		components: {
			Button,
		},
		inject: ['addResource'],
		methods: {
			submitData() {
				const title = this.$refs.titleInput.value;
				const description = this.$refs.descInput.value;
				const link = this.$refs.linkInput.value;

				if (title.trim() === '' || description.trim() === '' || link.trim() === '') {
					alert('fill all input fields');
					return;
				}

				this.addResource({ title, description, link });
			},
		},
	};
</script>

<style scoped>
	form {
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
		margin: 2rem auto;
		max-width: 40rem;
	}

	label {
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
	}

	input,
	textarea {
		display: block;
		width: 100%;
		font: inherit;
		padding: 0.15rem;
		border: 1px solid #ccc;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: #3a0061;
		background-color: #f7ebff;
	}

	.form-control {
		margin: 1rem 0;
	}
</style>
