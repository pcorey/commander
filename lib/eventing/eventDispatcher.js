EventDispatcher = class EventDispatcher {

  static dispatch(events) {
    events.map((event) => {
      let eventName = EventDispatcher.getEventName(event);

      console.log(`Firing ${eventName} event with: ${JSON.stringify(event)}.`);
      EventEmitter.emit(eventName, event);
    });
  }

  static getEventName(event) {
    return event.constructor.name;
  }

};