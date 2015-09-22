EventGenerator = class EventGenerator {

  static raise(event) {
    if (!this.pendingEvents) {
      this.pendingEvents = [];
    }
    this.pendingEvents.push(event);
  }

  static releaseEvents() {
    let events = this.pendingEvents || [];
    this.pendingEvents = [];
    return events;
  }

};