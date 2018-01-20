let jackrabbit = require("jackrabbit")

let rabbit = jackrabbit(process.env.AMQP_URL)

rabbit.default()
      .queue({ name: "sandbox-amqp-q" })
      .consume(msg => console.log(`${msg}`), { noAck: true })
      
setTimeout(() => {}, Number.POSITIVE_INFINITY)
