<script>
	import { push, replace, location } from "svelte-spa-router";
</script>

<main>
	<div id="tes">
		<h1>Calendar Viewer</h1>
		<button on:click={() => push("/")}>Go Back</button>
	</div>
</main>

<style>
	#tes {
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-right: -50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
</style>