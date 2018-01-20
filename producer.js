let jackrabbit = require("jackrabbit")

let rabbit = jackrabbit(process.env.AMQP_URL)

rabbit.topic("sandbox-amqp-t")
      .publish({ text: "monkey" }, { key: "primate.monkey" })
      .publish({ text: "gibbon" }, { key: "primate.ape.gibbon" })
      .publish({ text: "gorilla" }, { key: "primate.ape.gorilla" })
      .publish({ text: "human" }, { key: "primate.human" })
      .on("drain", rabbit.close)