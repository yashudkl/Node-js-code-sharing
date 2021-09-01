const EventEmitter = require('events');//Calling events module

const customEmmiter = new EventEmitter();

customEmmiter.on('response',(name,id)=>{ //paramenetrs are given which is used as an agruementy in customEmiter.emit
    console.log(`Data Recieved and your name is ${name} and ${id}`) //LOgics can be kept here
})
customEmmiter.on('response',()=>{  // Events is kept as parameeter (events mane click hover etc)
    console.log("Some other logic can be kept here")
})
customEmmiter.emit('response','Jhon',36) //Event is called here or executed also arguements  can be given which will be executed as parameter in above callbackfunction
