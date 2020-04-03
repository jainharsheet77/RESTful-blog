## AMQP

Stands for _Advanced Message Queuing Protocol_.

RabbitMQ is an open source, multi-protocol message queuing and broker system that supports the pub-sub architecture.

* **Producer**- is an application that sends messages toward a broker.
* **Exchange** - This is the place where the publishers publish the message.The message contains routing keys which is used by the exchange to route the messages.
* **Binding** - A binding is a logical link which defines the rule of routing between an exchange and a queue.
* **Queue** - Place where exchange queues the message.
* **Subscriber**-Client who subscribes to the messages from the broker.
* **Broker** -  A broker is responsible for receiving messages from producers or publishers and routing them to consumers or subscribers.
* **Consumer** - A consumer is an application that receives a message from the broker.
##### Broker consists of exchanges and queues:

<img src="https://support.smartbear.com/readyapi/docs/_images/testing/amqp-about.png"/>

### There are multiple types of exchanges in RabbitMQ

|Types of Exchanges    |Description     |
|----------------------|----------------|
|**Fanout Exchange** |<img src="http://deepdivetechblog.com/wp-content/uploads/2018/10/rabbitMQ-fanout-exchang-768x448.png"/>Exchange will send the message to all the queues that are bound to it without considering the routing key in the header.|
| **Direct Exchange**  |<img src="http://deepdivetechblog.com/wp-content/uploads/2018/10/rabbitMQ-direct-exchange-768x465.png"/>The exchange will direct the message to the queue which has the same routing key as that of the message.This key is present in the header of the message.|
| **Topic Exchange**   |<img src="http://deepdivetechblog.com/wp-content/uploads/2018/10/rabbitMQ-topic-exchange-768x482.png"/>Wildcard match is performed between the routing key in the header and the routing pattern specified in the binding|
| **Headers Exchange** |<img src="http://deepdivetechblog.com/wp-content/uploads/2018/10/rabbitMQ-headers-exchange-768x494.png"/>The exchange sends the message to the queue who has attributes with values on the binding same as that of the metadata of the message.If the binding consist of multiple headers, x-match has to be specified,which can take the value "any" or "all".If the value is all, then all the headers in the message and the binding must match.If the value is "any", any one header must match.The routing key is ignored here.|


