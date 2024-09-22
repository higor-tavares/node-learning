const EventEmitter = require("node:events");

class MyPublisher extends EventEmitter {}
const pub = new MyPublisher();

const newEvent = "new";
const crashEvent = "crash"

pub.on(newEvent, (argument)=> {
    console.log(`new event has been trigged! ${argument}`)
})
pub.on(crashEvent, ()=> {
    console.log("crash event has been trigged! exit...")
    process.exit(1)
})

pub.emit(newEvent, "hello,");
pub.emit(newEvent, "world!");
pub.emit(crashEvent);
pub.emit(newEvent, "not called!");