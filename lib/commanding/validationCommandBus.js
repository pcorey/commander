ValidationCommandBus = class ValidationCommandBus {

  constructor(bus) {
    this.bus = bus;
  }

  execute(command) {
    let validator = CommandTranslator.toValidator(command);
    if (validator) {
      validator.validate(command);
    }
    this.bus.execute(command);
  }

};