LoggingCommandBus = class LoggingCommandBus extends ValidationCommandBus {

  execute(command) {
    console.log(`Executing ${command.constructor.name}`);
    super.execute(command);
  }

};