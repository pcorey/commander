CommandHandler = class CommandHandler {

  handle(command) {
    throw new Error(`Unimplemented Command Handler for ${this.constructor.name}.`);
  }

};