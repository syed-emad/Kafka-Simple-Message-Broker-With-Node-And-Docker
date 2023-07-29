const Kafka = require("kafkajs").Kafka;
run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["localhost:9092"],
    });

    const admin = kafka.admin();
    console.log("Connecting....");
    await admin.connect();
    console.log("Connected");
    await admin.createTopics({
      topics: [{ topic: "Users", numPartitions: 2 }],
    });
    console.log("Created ");
    await admin.disconnect();
  } catch (e) {
    console.log("Something occured" + e);
  } finally {
    process.exit();
  }
}
