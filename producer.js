let jackrabbit = require("jackrabbit")

let rabbit = jackrabbit(process.env.AMQP_URL)

rabbit.default()
      .publish("hello", { key: "sandbox-amqp-q" })
      .on("drain", rabbit.close)