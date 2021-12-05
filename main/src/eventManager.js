var currentDate = new Date(),
    dateformat =
        [currentDate.getMonth() + 1, currentDate.getDate(), currentDate.getFullYear()].join("/") +
        " " +
        [currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()].join(":");

        

export var allEvents = [
    {
        id: "added id",
        title: "First Event",
        start: currentDate,
        allDay: false,
    },
]


function addEvent(event) {  
    console.log(currentDate);

    $: allEvents.push(event);

    console.log("Size: " + allEvents.length + " actually has value? " + allEvents[1].title);

}

export {addEvent};
/*
let events = [
    {
        title: "New Event",
        start: currentDate,
        allDay: false,
    },
];
*/