BaseEventDispatcher = class BaseEventDispatcher {

  dispatch() {
    let events = EventGenerator.releaseEvents();
    while (events.length) {
      events.map((event) => {
        let eventName = BaseEventDispatcher.getEventName(event);
        this.dispatchEvent(eventName, event);
      });
      events = EventGenerator.releaseEvents();
    }
  }

  dispatchEvent(eventName, event) {
    EventEmitter.emit(eventName, event);
  }

  static getEventName(event) {
    return event.constructor.name;
  }

};