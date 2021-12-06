<script>
	import { push, replace, location } from "svelte-spa-router";
</script>

<main>
	<div id="mainContent">
		<h1>Let's Get Started!</h1>
		<button
			on:click={() => {
				push("/FoodPrefs");
			}}>Plan My Day</button>
	</div>
</main>

<style>
	#mainContent {
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-right: -50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
	/*
	main{
		background-color: aliceblue;
		width: 100%;
		height: 100%;
	}
	*/
</style>
