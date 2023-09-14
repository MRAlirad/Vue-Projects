<template>
	<base-container title="Vuex">
		<Counter />
		<ChangeCounter />
		<button @click="addOne">Add 1</button>
	</base-container>
</template>

<script>
	import BaseContainer from './BaseContainer.vue';
	import Counter from './Counter.vue';
	import ChangeCounter from './ChangeCounter.vue';

	export default {
		components: {
			BaseContainer,
			Counter,
			ChangeCounter,
		},
		computed: {
			counter() {
				return this.$store.state.counter;
			},
		},
		methods: {
			addOne() {
				this.$store.commit('increment')
			},
		},
	};
</script>

<style>
	* {
		box-sizing: border-box;
	}

	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}
</style>
