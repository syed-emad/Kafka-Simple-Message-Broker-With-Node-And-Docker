const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "myapp",
  brokers: ["localhost:9092"],
});
const topicToCheck = "Users"; // Replace with the name of the topic you want to check

async function checkTopicExistence() {
  const admin = kafka.admin();
  try {
    console.log("Connecting to Kafka...");
    await admin.connect();
    console.log("Connected to Kafka");

    const topicMetadata = await admin.listTopics();

    console.log(JSON.stringify(topicMetadata));
  } catch (e) {
    console.error("Error occurred:", e);
  } finally {
    await admin.disconnect();
    process.exit();
  }
}

checkTopicExistence();
