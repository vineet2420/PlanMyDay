<script>
    import { addEvent } from "../eventManager";

    import { push, pop, loc } from "svelte-spa-router";

    import Fa from "svelte-fa";
    import {
        faArrowLeft,
        faArrowRight,
        faPlus,
    } from "@fortawesome/free-solid-svg-icons";

    var localEvents = [];

    function displayNewEvent() {
        localEvents = localEvents.concat([
            {
                title: "",
                start: "",
                allDay: false,
            },
        ]);
    }
</script>

<div class="topContent">
    <div class="parent">
        <div id="child"><h1>Add an Event!</h1></div>
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
            push("/Plan");
            addEvent({
                title: "New Event",
                start: "2021-12-04T14:30:00",
                allDay: false,
            });
        }}
    >
        <Fa icon={faArrowRight} /> Finish
    </button>
</div>

<main>
    <div class="grid-container">

        {#each localEvents as localEvent}
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
                    <button
                        id="deleteEventButton"
                        on:click={() => {
                            console.log(dateInputText);
                        }}>Delete</button
                    >
                </div>
            </div>
        {/each}
        
    </div>
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

    #eventNameInput {
        width: 400px;
    }

    #dateInput {
        width: 250px;
    }

    #secondRow {
        display: flex;
        justify-content: space-between;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>
