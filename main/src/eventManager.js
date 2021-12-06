import {foodEvents} from './foodSelectionManager';

var currentDate = new Date(),
    dateformat =
        [currentDate.getMonth() + 1, currentDate.getDate(), currentDate.getFullYear()].join("/") +
        " " +
        [currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()].join(":");

export var allUserEvents = [
    {
        id: "added id",
        title: "First Event",
        start: currentDate,
        allDay: false,
    },
]

export var combinedFoodAndUserEvents = allUserEvents.concat(foodEvents);

function combineFoodAndUserEvents(){
    combinedFoodAndUserEvents = allUserEvents.concat(foodEvents);
    // combinedFoodAndUserEvents.sort(compare);
    combinedFoodAndUserEvents = combinedFoodAndUserEvents;
}

function addEvent(event) {
    const indexToUpdate = allUserEvents.findIndex((iterator => iterator.id == event.id));

    if (indexToUpdate != -1) {
        allUserEvents[indexToUpdate] = event;
    }
    else {
        allUserEvents.push(event);
    }
    allUserEvents = allUserEvents;
}

function updateEventDrag(id, startTime, allDay){
    const indexToUpdate = allUserEvents.findIndex((iterator => iterator.id == id));

    allUserEvents[indexToUpdate].start = startTime;
    allUserEvents[indexToUpdate].allDay = allDay;

    allUserEvents = allUserEvents;
}

function genericRemoveEvent(id, eventList) {
    const localListIndex = eventList
        .map(function (iterator) {
            return iterator.id;
        })
        .indexOf(id);
    eventList.splice(localListIndex, 1);
    allUserEvents = allUserEvents;
}

function compare(a, b) {
    if ( a.start < b.start){
      return -1;
    }
    if ( a.start > b.start){
      return 1;
    }
    return 0;
  }

export { addEvent, genericRemoveEvent, updateEventDrag, combineFoodAndUserEvents };