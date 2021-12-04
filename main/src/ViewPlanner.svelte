<script>
	import { push, replace, location } from "svelte-spa-router";
	import FullCalendar from "svelte-fullcalendar";
	import dayGridPlugin from "@fullcalendar/daygrid";
	import timeGridPlugin from "@fullcalendar/timegrid";
	import interactionPlugin from "@fullcalendar/interaction";

	import Fa from "svelte-fa";
	import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

	var currentDate = new Date(),
		dateformat =
			[currentDate.getMonth() + 1, currentDate.getDate(), currentDate.getFullYear()].join("/") +
			" " +
			[currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()].join(":");
	let events = [
		{
			title: "New Event",
			start: currentDate,
			allDay: false,
		},
	];

	let options = {
		// slotMinTime: "06:00:00",
		headerToolbar: {
			left: "prev,next today",
			center: "title",
			right: "timeGridWeek,timeGridDay",
		},
		initialView: "timeGridWeek",
		plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
		weekends: true,
		height: 650,
		dayMaxEvents: true,
		events: events,
		editable: true,
		droppable: true,
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
