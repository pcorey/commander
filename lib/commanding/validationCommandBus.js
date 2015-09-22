ValidationCommandBus = class ValidationCommandBus extends BaseCommandBus {

  execute(command) {
    let validator = CommandTranslator.toValidator(command);
    if (validator) {
      validator.validate(command);
    }
    super.execute(command);
  }

};