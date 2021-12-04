import Home from "./LandingPage.svelte";
import CalendarViewer from "./ViewPlanner.svelte";


let routes = {
    "/": Home,
    "/Plan": CalendarViewer,
};

export {routes};