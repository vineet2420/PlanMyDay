import { onMount } from "svelte";

export var foodEvents = [];

function makeRequest() {

    onMount(async () => {
        fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=11706&categories=italian", {
            method: 'GET',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
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
                        })
                        dateStart += 1;
                        // console.log("I: " + i + ", Name: " + data.businesses[i].name + ", Address: " + data.businesses[i].location.display_address.toString());
                    }
                }

            }).catch(error => {
                console.log(error);
            });
    });
}

export { makeRequest };