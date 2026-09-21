import events from "./events.json" with { type: "json" };

const eventList = events.filter((event) => event.level === "critical");

eventList.forEach((event) => console.log(event.message));
console.log(`Summary: критичных событий: ${eventList.length}`);
