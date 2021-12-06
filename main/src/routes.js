import Home from "./components/LandingPage.svelte";
import NewEvent from "./components/AddEvents.svelte";
import FoodPrefs from "./components/FoodPrefs.svelte";
import CalendarViewer from "./components/ViewPlanner.svelte";


let routes = {
    "/": Home,
    "/FoodPrefs": FoodPrefs,
    "/NewEvent": NewEvent,
    "/Plan": CalendarViewer,
};

export {routes};