<script>
	import { push, replace, location } from "svelte-spa-router";
	import {addEvent} from './eventManager';
</script>

<main>
	<div id="mainContent">
		<h1>Let's Get Started!</h1>
		<button
			on:click={() => {
				
				addEvent({
					title: "New Event",
					start: "2021-12-04T14:30:00",
					allDay: false,
				})

				push("/Plan");
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
</style>
