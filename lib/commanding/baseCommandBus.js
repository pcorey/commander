BaseCommandBus = class BaseCommandBus {

  execute(command) {
    let handler = CommandTranslator.toCommandHandler(command);
    handler.handle(command);
  }

};