import Home from "./components/LandingPage.svelte";
import NewEvent from "./components/AddEvents.svelte";
import CalendarViewer from "./components/ViewPlanner.svelte";


let routes = {
    "/": Home,
    "/NewEvent": NewEvent,
    "/Plan": CalendarViewer,
};

export {routes};