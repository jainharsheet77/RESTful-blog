## MQTT

MQTT stands for _Message Queuing Telemetry Transport_.It is a machine-to-machine (M2M) lightweight publish and subscribe system where you can publish and receive messages as a client.

* Designed for constrained devices with low-bandwidth.
* Perfect solution for Internet of Things applications.
* Allows you to send commands and read and publish data from sensor node.
<img src="https://www.opc-router.de/wp-content/uploads/2020/01/MQTT_Schema_EN.jpg" width="500" height="300"/>

## MQTT Basic Concepts
### 1. Publish/Subscribe
A device can publish a message on a topic, or it can be subscribed to a particular topic to receive messages
<img src="https://i2.wp.com/randomnerdtutorials.com/wp-content/uploads/2017/01/publish-subscribe.png?w=946&ssl=1" width="500" height="100"/>

### 2.Messages
Messages are the information that you want to exchange between your devices.
Command or data.

### 3. Topics
* Way you register interest for incoming messages.
* Represented with strings separated by a forward slash
<img src="https://i2.wp.com/randomnerdtutorials.com/wp-content/uploads/2017/01/5mqtt-topics.jpg?w=442&ssl=1" width="250" height="100"/>

**To turn on a lamp in your home office using MQTT**

<img src="https://i1.wp.com/randomnerdtutorials.com/wp-content/uploads/2017/01/publish-subscribe-example.png?w=750&ssl=1" width="500" height="200" />

### 4. Broker
primarily responsible for
* receiving all messages.
* filtering the messages.
* decide who is interested in them.
* publishing the message to all subscribed clients.

<img src="https://esp8266-shop.com/wp-content/uploads/2018/12/ESP8266_MQTT_Architecture.jpg" width="600" height="400"/>

