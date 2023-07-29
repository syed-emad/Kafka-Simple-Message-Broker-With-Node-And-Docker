# Kafke Message Broker With Node Js And Docker

# Set up

1. Make sure you have Docker installed in you machine.
   you can simply download and run it from here for windows:
   https://docs.docker.com/desktop/install/windows-install/

2. Run this command in order to launch two docker containers
   1. Kafka Broker
   2. Zookeeper
      Command: docker-compose up -d
3. Run this in order to create a topic called Users
   node topic.js
4. To see if topic has been created run this command:
   node checktpics.js
5. To publish a message to our Kafka Broker run this command :
   node producer.js hello
   note: hello here is the text you want to send as publisher
6. Run this command to consume messaging being publis to kafka broker:
   node consumer.js
7. Consumer.js file keeps running and since we have created 2 partition if you run another consumer.js file it will divide the consumer among 2 group on consuming partition one and other consuming partition 2.
8. To test this run these command:
   node producer.js Zain
   node producer.js Ali
9. Parition destination of incoming data is decided by first letter, letter below N go to first parition.
