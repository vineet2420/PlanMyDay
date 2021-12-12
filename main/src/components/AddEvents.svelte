<script>
    import { fade, scale } from "svelte/transition";

    import {
        allUserEvents,
        addEvent,
        genericRemoveEvent,
        combineFoodAndUserEvents,
    } from "../eventManager";

    import { push, pop, loc } from "svelte-spa-router";

    import Fa from "svelte-fa";
    import {
        faArrowLeft,
        faArrowRight,
        faPlus,
    } from "@fortawesome/free-solid-svg-icons";

    var localEvents = [...allUserEvents];

    var count = 0;
    function displayNewEvent() {
        localEvents = localEvents.concat([
            {
                id: String((Math.random() * Date.now()).toFixed()),
                title: "",
                start: "",
                allDay: false,
                color:
                    "#" +
                    ((Math.random() * 0xffffff) << 0)
                        .toString(16)
                        .padStart(6, "0"),
            },
        ]);
        count = count + 1;
    }

    function removeLocalEvent(id) {
        genericRemoveEvent(id, localEvents);

        // An event can be added locally but not saved to the global list
        // Check if value exists in global list as well and delete
        genericRemoveEvent(id, allUserEvents);
        localEvents = localEvents;
    }

    import {
        makeRequest,
        mutableZipCode,
        categoryValue,
        foodEvents,
        addFoodEvent,
        removeFoodEvent,
    } from "../foodSelectionManager";

    let zipCode = "";
    let category = "";

    mutableZipCode.subscribe((value) => {
        zipCode = value;
    });

    categoryValue.subscribe((value) => {
        category = value;
    });

    // makeRequest(zipCode, category);

    var localFoodEvents = [
        ...foodEvents
    ];

    function removeLocalFoodEvent(id) {
        removeFoodEvent(id, localFoodEvents);

        // An event can be added locally but not saved to the global list
        // Check if value exists in global list as well and delete
        removeFoodEvent(id, foodEvents);
        localFoodEvents = localFoodEvents;
    }

    // Only make the request if coming from food preferences page, making an additional
    // request after coming from calendar will reset object ids and no need
    let promise = () => {};
    if (foodEvents.length === 0) {
        promise = makeRequest(zipCode, category);
    }
    /*
{id: String((Math.random() * Date.now()).toFixed()),
                        title: 'Test',
                        start: "2021-12-12T12:30:00",
                        allDay: false,}
    */

    console.log(localFoodEvents);
</script>

<div class="topContent">
    <div class="parent">
        <div id="child"><h1>Add an Event</h1></div>
        <div id="child-addEventButton">
            <button on:click={() => displayNewEvent()}>
                <Fa icon={faPlus} /> Add
            </button>
        </div>
    </div>

    <button id="back" on:click={() => pop()}>
        <Fa icon={faArrowLeft} /> Go Back
    </button>
    <button
        id="next"
        on:click={() => {
            combineFoodAndUserEvents();
            push("/Plan");
        }}
    >
        <Fa icon={faArrowRight} /> Finish
    </button>
</div>

<main>
    {#if localEvents.length > 0}
        <h2>My Events</h2>
    {/if}
    <div class="grid-container">
        {#each localEvents as localEvent}
            <!--  transition:scale -->
            <div id="eventFields">
                <input
                    bind:value={localEvent.title}
                    id="eventNameInput"
                    placeholder="Event Name"
                />
                <div id="secondRow">
                    <input
                        bind:value={localEvent.start}
                        type="datetime-local"
                        id="dateInput"
                        placeholder="Date"
                        on:click={() => console.log("clicked")}
                    />
                    <div id="checkbox">
                        <input
                            bind:checked={localEvent.allDay}
                            type="checkbox"
                            name="alldayCheckbox"
                        />
                        <label for="alldayCheckbox">All-Day</label>
                    </div>
                </div>
                <div id="thirdRow">
                    <button
                        id="deleteEventButton"
                        on:click={() => {
                            removeLocalEvent(localEvent.id);
                        }}>Delete</button
                    >
                    <button
                        id="saveEventButton"
                        on:click={() => {
                            addEvent(
                                {
                                    id: localEvent.id,
                                    title: localEvent.title,
                                    start: localEvent.start,
                                    allDay: localEvent.allDay,
                                },
                                localEvents
                            );
                        }}>Save</button
                    >
                </div>
            </div>
        {/each}
    </div>
    {#await promise}
        <p>Loading restaurants...</p>
    {:then foodEvents}
        <h2>Restaurant Events</h2>
        <div class="grid-container">
            {#each localFoodEvents.length > 0 ? localFoodEvents : foodEvents===undefined?[]:foodEvents as foodEvent}
                <!--  transition:scale -->
                <div id="eventFields">
                    <input
                        bind:value={foodEvent.title}
                        id="eventNameInput"
                        placeholder="Event Name"
                    />
                    <div id="secondRow">
                        <input
                            bind:value={foodEvent.start}
                            type="datetime-local"
                            id="dateInput"
                            placeholder="Date"
                            on:click={() => console.log("clicked")}
                        />
                        <div id="checkbox">
                            <input
                                bind:checked={foodEvent.allDay}
                                type="checkbox"
                                name="alldayCheckbox"
                            />
                            <label for="alldayCheckbox">All-Day</label>
                        </div>
                    </div>
                    <div id="thirdRow">
                        <button
                            id="deleteEventButton"
                            on:click={() => {
                                removeLocalFoodEvent(foodEvent.id);
                                console.log(
                                    "delete food event: " +
                                        foodEvent.id +
                                        " : " +
                                        foodEvent.title
                                );
                            }}>Delete</button
                        >
                        <button
                            id="saveEventButton"
                            on:click={() => {
                                addFoodEvent(
                                    {
                                        id: foodEvent.id,
                                        title: foodEvent.title,
                                        start: foodEvent.start,
                                        allDay: foodEvent.allDay,
                                    },
                                    localEvents
                                );
                                console.log("save food event");
                            }}>Save</button
                        >
                    </div>
                </div>
            {/each}
        </div>
    {:catch error}
        <p>Error: {error}</p>
    {/await}
</main>

<style>
    .parent {
        margin-left: auto;
        margin-right: auto;
        display: table;
        margin-bottom: 1%;
        /* width: 20%; */
    }
    #child {
        display: table-cell;
        /* color: red; */
        /* background: #333333; */
    }

    .topContent {
        text-align: center;
        width: 100%;
        /* background-color: aqua; */
        margin-bottom: 10px;
    }

    #back {
        margin-right: 50px;
    }

    #child-addEventButton {
        margin-left: 30px;
    }

    main {
        /* background-color: aliceblue; */
    }

    #eventFields {
        border: 1px solid lightskyblue;
        border-radius: 20px;
        padding: 15px;
        display: grid;
        width: 400px;
        margin-bottom: 20px;
    }

    #eventFields button {
        width: 100px;
    }

    #eventNameInput {
        width: 400px;
    }

    #dateInput {
        width: 260px;
    }

    #secondRow {
        display: flex;
        justify-content: space-between;
    }

    #thirdRow {
        display: flex;
        justify-content: space-around;
    }

    #checkbox {
        display: flex;
    }

    #checkbox label {
        padding-left: 10px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>
