import {foodEvents} from './foodSelectionManager';

export var allUserEvents = [];

export var combinedFoodAndUserEvents = allUserEvents.concat(foodEvents);

function combineFoodAndUserEvents(){
    combinedFoodAndUserEvents = allUserEvents.concat(foodEvents);
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


export { addEvent, genericRemoveEvent, updateEventDrag, combineFoodAndUserEvents };