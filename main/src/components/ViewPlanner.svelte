<script>
	import { push, pop } from "svelte-spa-router";
	import FullCalendar from "svelte-fullcalendar";
	import dayGridPlugin from "@fullcalendar/daygrid";
	import timeGridPlugin from "@fullcalendar/timegrid";
	import interactionPlugin from "@fullcalendar/interaction";

	import Fa from "svelte-fa";
	import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

	import { allEvents, updateEventDrag } from "../eventManager";

	import moment from 'moment';

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
			console.log(info.event.allDay);
			var startTimeConverted = moment(info.event.start).format("YYYY-MM-DDTkk:mm");
			updateEventDrag(info.event.id, startTimeConverted, info.event.allDay);
		},
	};

</script>

<main>
	<h1>View My Plan</h1>
	<button id="back" on:click={() => pop()}>
		<Fa icon={faArrowLeft} /> Go Back
	</button>
</main>

<FullCalendar {options} />

<style>
	main {
		text-align: center;
	}
</style>
