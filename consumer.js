let jackrabbit = require("jackrabbit")

let rabbit = jackrabbit(process.env.AMQP_URL)

rabbit.default()
      .queue({ name: "sandbox-amqp-q" })
      .consume(console.log, { noAck: true })