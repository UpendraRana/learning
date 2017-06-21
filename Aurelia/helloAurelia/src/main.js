import {
    ConsoleAppender,
} from 'aurelia-logging-console';
import {
    LogManager,
} from 'aurelia-framework';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia) {
    aurelia.use.standardConfiguration();
    aurelia.start().then(s => s.setRoot());
}