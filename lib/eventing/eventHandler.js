EventHandler = class EventHandler {

  constructor(handlers, events="*", prefix="when") {
    this.handlers = handlers;
    this.events = events;
    this.prefix = prefix;

    this.captureEvents(events);
  }

  captureEvents(events) {
    let that = this;
    EventEmitter.on(events, function() {
      that.handle.bind(that)(this.event, arguments);
    });
  }

  handle(event, data) {
    let handler = this.getHandler(event);
    if (this.handlerIsRegistered(handler)) {
      handler.apply(this, data);
    }
  }

  getHandler(event) {
    return this.handlers[this.prefix + event];
  }

  handlerIsRegistered(handler) {
    return handler && _.isFunction(handler);
  }

}