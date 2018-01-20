let jackrabbit = require("jackrabbit")

let rabbit = jackrabbit(process.env.AMQP_URL)
let exchange = rabbit.topic("sandbox-amqp-t")

exchange.queue({ exclusive: true, key: "primate.#" })
        .consume(msg => console.log(`${msg.text} is a primate`), { noAck: true })
        
exchange.queue({ exclusive: true, key: "primate.ape.*" })
        .consume(msg => console.log(`${msg.text} is an ape`), { noAck: true })

exchange.queue({ exclusive: true, key: "#.human" })
        .consume(msg => console.log(`${msg.text} must be different`), { noAck: true })

      
setTimeout(() => {}, Number.POSITIVE_INFINITY)
