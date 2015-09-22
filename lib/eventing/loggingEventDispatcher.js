LoggingEventDispatcher = class LoggingEventDispatcher extends BaseEventDispatcher {

  dispatchEvent(eventName, event) {
    console.log(`Firing ${eventName} event with: ${JSON.stringify(event)}.`);
    super.dispatchEvent(eventName, event);
  }

};