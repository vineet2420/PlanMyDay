<script>
    import { push, pop } from "svelte-spa-router";

    import Fa from "svelte-fa";
    import {
        faArrowLeft,
        faArrowRight,
    } from "@fortawesome/free-solid-svg-icons";

    import {makeRequest} from '../foodSelectionManager';
    makeRequest();
</script>

<div id = "header">
            <h1>Select Your Food Preferences</h1>
       
            <button id="back" on:click={() => pop()}>
                <Fa icon={faArrowLeft} /> Go Back
            </button>
            <button
                id="next"
                on:click={() => {
                    push("/NewEvent");
                }}
            >
                <Fa icon={faArrowRight} /> Next
            </button>
</div>

<style>
    #header{
        text-align: center;
    }

    #back {
        margin-right: 50px;
    }
</style>
