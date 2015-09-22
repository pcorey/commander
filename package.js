Package.describe({
  name: 'east5th:commander',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Commands and Events',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/pcorey/commander',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "eventemitter2": "0.4.14"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');

  api.addFiles(['lib/eventing/eventEmitter.js'], 'server');

  api.addFiles(['lib/commanding/commandTranslator.js',
                'lib/commanding/baseCommandBus.js',
                'lib/commanding/validationCommandBus.js',
                'lib/commanding/commandBus.js',
                'lib/commanding/commandHandler.js',
                'lib/eventing/eventGenerator.js',
                'lib/eventing/eventDispatcher.js',
                'lib/eventing/eventHandler.js'], ['client', 'server']);

  api.export('CommandBus');
  api.export('CommandHandler');
  api.export('EventGenerator');
  api.export('EventDispatcher');
  api.export('EventEmitter');
  api.export('EventHandler');
});