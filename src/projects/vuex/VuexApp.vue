<template>
	<base-container title="Vuex">
		<Counter />
        <FavouriteValue />
		<ChangeCounter />
		<button @click="addOne">Add 10</button>
	</base-container>
</template>

<script>
	import BaseContainer from './BaseContainer.vue';
	import Counter from './Counter.vue';
	import ChangeCounter from './ChangeCounter.vue';
	import FavouriteValue from './FavouriteValue.vue';

	export default {
		components: {
			BaseContainer,
			Counter,
			ChangeCounter,
            FavouriteValue
		},
		computed: {
			counter() {
				return this.$store.state.counter;
			},
		},
		methods: {
			addOne() {
				// this.$store.commit('increase', {value: 10});
				// this.$store.commit({
					// type: 'increase',
					// value: 10,
				// });
				this.$store.dispatch({
					type: 'increase',
					value: 10,
				});
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
