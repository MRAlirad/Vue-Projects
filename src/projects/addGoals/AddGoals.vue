<template>
	<div class="add-golas-segment">
		<header>
			<h1>Vue Course Goals</h1>
		</header>

		<section id="user-goals">
			<h2>My course goals</h2>
			<input
				type="text"
				v-model="enteredGoal"
			/>
			<button
				class="add-goal-btn"
				@click="addGoal"
			>
				Add Goal
			</button>
			<p v-show="goals.length === 0">No goals have been added yet - please start adding some!</p>
			<ul v-show="goals.length > 0">
				<li
					v-for="{goal, id} in goals"
					:key="goal"
				>
					{{ goal }}
					<button
						class="delete-goal"
						@click="deleteGoal(id)"
					>
						×
					</button>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'MyGoals',
		data() {
			return {
				enteredGoal: '',
				goals: [],
			};
		},
		methods: {
			addGoal() {
				if (this.enteredGoal === '') return;

				this.goals.push({
					id: Date.now(),
					goal: this.enteredGoal,
				});
				this.enteredGoal = '';
			},
			deleteGoal(id) {
				this.goals = this.goals.filter((goal) => goal.id !== id)
			},
		},
	};
</script>

<style scoped>
	* {
		box-sizing: border-box;
	}

	html {
		font-family: 'Jost', sans-serif;
	}

	body {
		margin: 0;
	}

	header {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 3rem;
		border-radius: 10px;
		padding: 1rem;
		background-color: #1b995e;
		color: white;
		text-align: center;
	}

	#user-goals {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 3rem;
		border-radius: 10px;
		padding: 1rem;
		text-align: center;
	}

	#user-goals h2 {
		font-size: 2rem;
		border-bottom: 4px solid #ccc;
		color: #1b995e;
		margin: 0 0 1rem 0;
	}

	#user-goals input {
		font: inherit;
		border: 1px solid #ccc;
		border-right: none;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		padding: 5px;
	}

	#user-goals input:focus {
		outline: none;
		border-color: #1b995e;
		background-color: #d7fdeb;
	}

	#user-goals > .add-goal-btn {
		font: inherit;
		cursor: pointer;
		border: 1px solid #ff0077;
		background-color: #ff0077;
		color: white;
		padding: 0.05rem 1rem;
		box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
		height: 30px;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	#user-goals > .add-goal-btn:hover,
	#user-goals > .add-goal-btn:active {
		background-color: #ec3169;
		border-color: #ec3169;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
	}

	#user-goals ul {
		list-style: none;
		margin: 1rem 0;
		padding: 0;
	}

	#user-goals li {
		margin: 1rem 0;
		font-size: 1.25rem;
		font-weight: bold;
		background-color: #8ddba4;
		padding: 0.5rem 2rem;
		color: #1f1f1f;
		border-radius: 25px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#user-goals li .delete-goal {
		padding: 0;
		margin: 0;
		background: none;
		border: none;
		outline: none;
		font-size: 25px;
		color: red;
		cursor: pointer;
	}
</style>
