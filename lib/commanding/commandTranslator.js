CommandTranslator = class CommandTranslator {

  static toCommandHandler(command) {
    let commandName = command.constructor.name;
    let handlerName = commandName.replace(/Command$/, 'CommandHandler');

    let handler = global[handlerName];
    if (!handler) {
      throw new Error(`Command Handler ${handlerName} does not exist.`);
    }

    return new handler();
  }

  static toValidator(command) {
    let commandName = command.constructor.name;
    let validatorName = commandName.replace(/Command$/, 'Validator');

    let validator = global[validatorName];
    if (!validator) {
      return null;
    }

    return new validator();
  }

};