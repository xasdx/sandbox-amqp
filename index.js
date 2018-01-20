let assert= require("assert")
let jackrabbit = require("jackrabbit")

let rabbit = jackrabbit(process.env.AMQP_URL)

rabbit.default()
      .queue({ name: "sandbox-amqp-q" })
      .consume(data => {
        console.log(`consumed message '${data}'`)
        assert.equal(data, "hello")
      }, { noAck: true })
      
rabbit.default()
      .publish("hello", { key: "sandbox-amqp-q" })
      .on("drain", rabbit.close)
