<script>
    import { push, pop } from "svelte-spa-router";

    import Fa from "svelte-fa";
    import {
        faArrowLeft,
        faArrowRight,
    } from "@fortawesome/free-solid-svg-icons";

    import Select from "svelte-select";

    import {
        mutableZipCode,
        categoryValue,
        allFoodOptions,
        resetFoodList
    } from "../foodSelectionManager";

    var items = [{ value: "", label: "" }];
    allFoodOptions.subscribe((value) => {
        items = value;
    });

    var inputZipCode = "";
    var cuisineSelection = undefined;

    mutableZipCode.subscribe((value) => {
        inputZipCode = value;
    });

    categoryValue.subscribe((value) => {
        if (!(value == null)) {
            cuisineSelection = items.find((element) => element.value == value);
        }
    });

    function handleSelect(event) {
        cuisineSelection = event.detail;
    }

    function handleClear() {
        cuisineSelection = undefined;
    }
</script>

<div id="header">
    <h1>Select Your Food Preferences</h1>

    <button id="back" on:click={() => pop()}>
        <Fa icon={faArrowLeft} /> Go Back
    </button>
    <button
        id="next"
        on:click={() => {
            var foodEvents = []
            console.log(inputZipCode);
            if (inputZipCode === "") {
                alert("Please add a zip code.");
            } else if (cuisineSelection === undefined) {
                alert("Please select a cuisine type.");
            } else {
                mutableZipCode.set(inputZipCode);
                categoryValue.set(cuisineSelection.value);
                resetFoodList();
                push("/NewEvent");
            }
        }}
    >
        <Fa icon={faArrowRight} /> Next
    </button>
</div>

<main>
    <form>
        <input
            bind:value={inputZipCode}
            name="zip"
            type="text"
            pattern="[0-9]*"
            id="zipCode"
            placeholder="Zip Code"
        />
        <br />

        <div class="themed">
            <Select
                placeholder="Cuisine Type"
                id="cuisineSelector"
                {items}
                bind:value={cuisineSelection}
                on:select={handleSelect}
                on:clear={handleClear}
            />
        </div>
    </form>
</main>

<style>
    form {
        text-align: center;
        padding-top: 2%;
    }

    form input,
    .themed {
        width: 400px;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
    }

    #header {
        text-align: center;
    }

    #back {
        margin-right: 50px;
    }
</style>
