<script>
	import { push, replace, location } from "svelte-spa-router";
</script>

<main>
	<img id="logoImg" alt="Logo" src="Assets/Logo.png"/>
	<div id="mainContent">
		<h1>Let's Get Started!</h1>
		<button
			on:click={() => {
				push("/FoodPrefs");
			}}>Plan My Day</button
		>
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

	#logoImg {
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100px;
		width: 200px;
	}
	/*
	main{
		background-color: aliceblue;
		width: 100%;
		height: 100%;
	}
	*/
</style>
