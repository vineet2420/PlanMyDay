<script>
	import Router from "svelte-spa-router";

	import Root from "./LandingPage.svelte";
	import CalendarViewer from "./ViewPlanner.svelte";

	let routes = {
		"/": Root,
		"/Plan": CalendarViewer,
	};
</script>

<Router { routes } />