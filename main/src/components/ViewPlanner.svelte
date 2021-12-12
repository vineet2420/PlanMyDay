<script>
	import { push, pop } from "svelte-spa-router";
	import FullCalendar from "svelte-fullcalendar";
	import dayGridPlugin from "@fullcalendar/daygrid";
	import timeGridPlugin from "@fullcalendar/timegrid";
	import interactionPlugin from "@fullcalendar/interaction";

	import Fa from "svelte-fa";
	import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

	import {
		combinedFoodAndUserEvents,
		updateUserEventDrag,
	} from "../eventManager";

	import { updateFoodEventDrag } from "../foodSelectionManager";

	import moment from "moment";

	let options = {
		// slotMinTime: combinedFoodAndUserEvents[0].start,
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
		events: combinedFoodAndUserEvents,
		editable: true,
		droppable: true,
		eventMinHeight: 80,
		eventDrop: function (info) {
			var startTimeConverted = moment(info.event.start).format(
				"YYYY-MM-DDTkk:mm"
			);

			if (info.event.id.charAt(0) === "F") {
				updateFoodEventDrag(
					info.event.id,
					startTimeConverted,
					info.event.allDay
				);
			} else {
				updateUserEventDrag(
					info.event.id,
					startTimeConverted,
					info.event.allDay
				);
			}
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
