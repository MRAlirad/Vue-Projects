<template>
	<div class="user-item">
		<h3>{{ name }}</h3>
		<span
			class="role"
			:class="roleClass"
			>{{ role }}</span
		>
	</div>
</template>

<script>
	export default {
		name: 'UserItem',
		props: ['name', 'role'],
		computed: {
			roleClass() {
				if (this.role === 'Engineer')
					return 'role--engineer';
				if (this.role === 'Consultant')
					return 'role--consultant';
				return null;
			},
		},
	};
</script>

<style scoped>
	.user-item {
		margin: 1rem 0;
		border: 1px solid #ccc;
		padding: 1rem;
	}

	h3 {
		margin: 0.5rem 0;
	}

	.role {
		border-radius: 40px;
		background-color: #ccc;
		color: #252525;
		padding: 0.25rem 1rem;
		display: inline-block;
	}

	.role--engineer {
		background-color: blue;
		color: white;
	}

	.role--consultant {
		background-color: #af003a;
		color: white;
	}
</style>
