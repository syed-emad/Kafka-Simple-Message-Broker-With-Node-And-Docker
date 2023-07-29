const Kafka = require("kafkajs").Kafka;
const msg = process.argv[2];
run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["localhost:9092"],
    });
    const producer = kafka.producer();
    console.log("Connecting....");
    await producer.connect();
    console.log("Connected");
    console.log("messaeg", msg);
    const partition = msg[0] < "N" ? 0 : 1;
    const result = await producer.send({
      topic: "Users",
      messages: [
        {
          value: msg,
          partition: partition,
        },
      ],
    });
    console.log(`Send Successfully! ${JSON.stringify(result)}`);
    await producer.disconnect();
  } catch (e) {
    console.log("Something occured" + e);
  } finally {
    process.exit();
  }
}
