export var foodEvents = [];

import { writable } from "svelte/store";

export const mutableZipCode = writable("");
export const categoryValue = writable("");

async function makeRequest(zipCode, category) {
    return fetch("https://protected-chamber-65305.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + zipCode + "&categories=" + category, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + '',
        }
    }).then(response => response.json())
        .then(data => {
            foodEvents = [];
            const d = new Date();
            var dateStart = d.getDate() - d.getDay();
            var month = ('0' + (d.getMonth() + 1)).slice(-2);
            var year = d.getFullYear()
            console.log(year)

            for (var i in data.businesses) {
                if (i < 7) {
                    foodEvents.push({
                        id: 'F' + String((Math.random() * Date.now()).toFixed()),
                        title: data.businesses[i].name + " - " + data.businesses[i].location.display_address.toString(),
                        start: year + "-" + month + "-" + (dateStart < 10 ? ("0" + dateStart) : dateStart) + (i%2==0?"T12:00:00":"T12:30:00"),
                        allDay: false,
                        color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
                    })
                    dateStart += 1;
                }
            }
            return foodEvents;

        }).catch(error => {
            console.log(error);
        });
}

export function addFoodEvent(event) {
    const indexToUpdate = foodEvents.findIndex((iterator => iterator.id == event.id));
    if (indexToUpdate != -1) {
        foodEvents[indexToUpdate] = event;
    }
    else {
        foodEvents.push(event);
    }
    foodEvents = foodEvents;
}

export function updateFoodEventDrag(id, startTime, allDay) {
    const indexToUpdate = foodEvents.findIndex((iterator => iterator.id == id));

    foodEvents[indexToUpdate].start = startTime;
    foodEvents[indexToUpdate].allDay = allDay;

    foodEvents = foodEvents;
}

export function removeFoodEvent(id, foodList) {
    const localListIndex = foodList
        .map(function (iterator) {
            return iterator.id;
        })
        .indexOf(id);
    foodList.splice(localListIndex, 1);
    foodEvents = foodEvents;
}


export const resetFoodList = () => foodEvents = [];

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
    { value: "spanish, All", label: "Spanish"},
    { value: "sushi, All", label: "Sushi Bars" },
    { value: "swedish", label: "Swedish" },
    { value: "thai, All", label: "Thai" },
    { value: "vegan, All", label: "Vegan" },
    { value: "vegetarian, All", label: "Vegetarian" },
    { value: "vietnamese, All", label: "Vietnamese" }
]);

export { makeRequest }
