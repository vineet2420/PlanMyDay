import { onMount } from "svelte";

export var foodEvents = [];

import { writable } from "svelte/store";

export const mutableZipCode = writable("");
export const categoryValue = writable("");

function makeRequest(zipCode, categories) {
    foodEvents = [];
    onMount(async () => {
        
        fetch("https://protected-chamber-65305.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="+zipCode+"&categories="+categories, {
            method: 'GET',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + 'LU9SO-KeJAim6Ea1DcNgt_Ea98kqWYMPWcSwZ_A4mk0D1LERJ67ZoDne9ELihbd9E_hepJeJzvYDKcMmrQEp9CHU-5WXEJch8zSDmK54C5zjAfwmWI4-NzWxVc2CYXYx',
            }
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data.businesses);

                const d = new Date();
                var dateStart = d.getDate() - d.getDay();

                for (var i in data.businesses) {
                    if (i < 7) {
                // console.log(dateStart<10?"0"+dateStart:dateStart);
                        foodEvents.push({
                            id: String((Math.random() * Date.now()).toFixed()),
                            title: data.businesses[i].name + " - " + data.businesses[i].location.display_address.toString(),
                            start: "2021-12-"+(dateStart<10?("0"+dateStart):dateStart)+"T12:30:00",
                            allDay: false,
                            color: '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
                        })
                        dateStart += 1;
                        console.log("I: " + i + ", Name: " + data.businesses[i].name + ", Address: " + data.businesses[i].location.display_address.toString());
                    }
                }

            }).catch(error => {
                console.log(error);
            });
    });
}

export var allFoodOptions = writable([
    { value: "newamerican, tradamerican, All", label: "American" },
    { value: "afghani", label: "Afghan" },
    { value: "african", label: "African" },
    { value: "arabian", label: "Arabic" },
    { value: "argentine", label: "Argentine" },
    { value: "asianfusion", label: "Asian Fusion" },
    { value: "australian", label: "Australian" },
    { value: "bbq", label: "Barbeque" },
    { value: "belgian, All", label: "Belgian" },
    { value: "breakfast_brunch, pancakes", label: "Breakfast & Brunch" },
    { value: "bulgarian", label: "Bulgarian" },
    { value: "burgers, All", label: "Burgers" },
    { value: "cafes", label: "Cafes" },
    { value: "chinese, All", label: "Chinese" },
    { value: "delis", label: "Delis" },
    { value: "hotdogs, All", label: "Fast Food" },
    { value: "food_court", label: "Food Court" },
    { value: "french, All", label: "French" },
    { value: "greek, All", label: "Greek" },
    { value: "halal", label: "Halal" },
    { value: "indpak, All", label: "Indian" },
    { value: "irish, All", label: "Irish" },
    { value: "italian, All", label: "Italian" },
    { value: "japanese, All", label: "Japanese" },
    { value: "jewish", label: "Jewish" },
    { value: "korean, All", label: "Korean" },
    { value: "latin, All", label: "Latin American" },
    { value: "mediterranean, All", label: "Mediterranean" },
    { value: "mexican, All", label: "Mexican" },
    { value: "mideastern", label: "Middle Eastern" },
    { value: "pizza, All", label: "Pizza" },
    { value: "portuguese", label: "Portuguese" },
    { value: "russian, All", label: "Russian" },
    { value: "sushi, All", label: "Sushi Bars" },
    { value: "swedish", label: "Swedish" },
    { value: "thai, All", label: "Thai" },
    { value: "vegan, All", label: "Vegan" },
    { value: "vegetarian, All", label: "Vegetarian" },
    { value: "vietnamese, All", label: "Vietnamese" }    
]);

export {makeRequest}