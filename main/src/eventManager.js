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
    const indexToUpdate = allEvents.findIndex((iterator => iterator.id == event.id));

    if (indexToUpdate != -1) {
        allEvents[indexToUpdate] = event;
    }
    else {
        allEvents.push(event);
    }
    allEvents = allEvents;
}

function updateEventDrag(id, startTime, allDay){
    const indexToUpdate = allEvents.findIndex((iterator => iterator.id == id));

    allEvents[indexToUpdate].start = startTime;
    allEvents[indexToUpdate].allDay = allDay;

    allEvents = allEvents;
}

function genericRemoveEvent(id, eventList) {
    const localListIndex = eventList
        .map(function (iterator) {
            return iterator.id;
        })
        .indexOf(id);
    eventList.splice(localListIndex, 1);
    allEvents = allEvents;
}

export { addEvent, genericRemoveEvent, updateEventDrag };
/*
let events = [
    {
        title: "New Event",
        start: currentDate,
        allDay: false,
    },
];
*/