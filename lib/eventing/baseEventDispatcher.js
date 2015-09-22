BaseEventDispatcher = class BaseEventDispatcher {

  dispatch(events) {
    events.map((event) => {
      let eventName = BaseEventDispatcher.getEventName(event);
      this.dispatchEvent(eventName, event);
    });
  }

  dispatchEvent(eventName, event) {
    EventEmitter.emit(eventName, event);
  }

  static getEventName(event) {
    return event.constructor.name;
  }

};