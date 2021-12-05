<script>
	import { push, replace, location } from "svelte-spa-router";
	import FullCalendar from "svelte-fullcalendar";
	import dayGridPlugin from "@fullcalendar/daygrid";
	import timeGridPlugin from "@fullcalendar/timegrid";
	import interactionPlugin from "@fullcalendar/interaction";

	import Fa from "svelte-fa";
	import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

	import { allEvents } from "./eventManager";

	console.log("In calendar view: " + allEvents.length);

	let options = {
		// slotMinTime: "06:00:00",
		headerToolbar: {
			left: "prev,next today",
			center: "title",
			right: "timeGridWeek, timeGridDay",
		},
		initialView: "timeGridWeek",
		plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
		weekends: true,
		height: 700,
		dayMaxEvents: true,
		events: allEvents,
		editable: true,
		droppable: true,
		eventDrop: function (info) {
			console.log(info);
			console.log(info.event.id);
		},
	};

	function toggleWeekends() {
		options.weekends = !options.weekends;
		options = { ...options };
	}
</script>

<main>
	<h1>View My Plan</h1>
	<button id="back" on:click={() => push("/")}>
		<Fa icon={faArrowLeft} /> Go Back
	</button>
</main>

<FullCalendar {options} />

<style>
	main {
		text-align: center;
	}
</style>
