const EventEmitter = require("node:events");

class MyPublisher extends EventEmitter {}
const pub = new MyPublisher();

const newEvent = "new";
const crashEvent = "crash"

const newEventListener = (arg) => { console.log(`new event has been trigged! ${arg}`); }
const crashEventListener = () => {
    console.log("crash event has been trigged! exit...")
    process.exit(1)
}

pub.on(newEvent, newEventListener);
pub.on(crashEvent, crashEventListener)

pub.emit(newEvent, "hello,");
pub.emit(newEvent, "world!");
pub.emit(crashEvent);
pub.emit(newEvent, "not called!");