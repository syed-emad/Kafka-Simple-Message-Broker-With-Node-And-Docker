const Kafka = require("kafkajs").Kafka;
run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["localhost:9092"],
    });
    const consumer = kafka.consumer({ groupId: "test" });
    console.log("Connecting....");
    await consumer.connect();
    consumer.subscribe({
      topic: "Users",
      fromBeginning: true,
    });
    await consumer.run({
      eachMessage: async (result) => {
        console.log(
          `Received Message ${result.message.value} on partition ${result.partition}`
        );
      },
    });
  } catch (e) {
    console.log("Something occured" + e);
  }
}
