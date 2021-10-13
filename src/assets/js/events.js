let events = [];

export default class Event {
  constructor(vue) {
    this.e = vue;
  }

  getRegisteredEvents() {
    return events;
  }

  $emit(name, payload) {
    this.e.$emit(name, payload);
  }

  $on(event, cb, name) {
    let _event = event;
    if (name) {
      _event = `${event}@${name}`;
    }

    // if event is not registered push the event to the events array and add a listener
    if (!this.isEventRegistered(_event)) {
      events.push(_event);
      return this.e.$on(event, cb);
    } else {
      // if event is registered remove the registered event and replace it with the new one
      this.e.$off(event);
      return this.e.$on(event, cb);
    }
  }
  $off(name, payload) {
    this.e.$off(name, payload);
  }

  isEventRegistered(name) {
    for (let i = 0; i < events.length; i++) {
      const event = events[i];

      if (name === event) {
        return true;
      }
    }

    return false;
  }
}
