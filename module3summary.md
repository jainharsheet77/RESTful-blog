## Basic Concepts for Embedded

### 1. Sensors and Actuators
The main difference between sensor and actuator is that a sensor is used to monitor the changes in the environment while an actuator is used to control the environmental or physical changes.

<img src="https://pediaa.com/wp-content/uploads/2019/02/Difference-Between-Sensor-and-Actuator-Comparison-Summary.jpg" height="500" width="600" />

#### What is a sensor?
A sensor is a device that can detect the changes in a physical environment. It can convert physical parameters such as temperature, heat, motion, humidity, pressure, etc. into electrical signals. We can transform this signal into a human readable display and send them through a network for further processing. There are mainly two types of sensors as active sensors and passive sensors. Active sensors require power supply while passive sensors do not require a power supply.

<img src="https://i0.wp.com/iot4beginners.com/wp-content/uploads/2018/12/different-types-of-sensor.png?fit=920%2C488&ssl=1" width="600" height="400" />

#### What is an actuator?
An actuator is a device that converts a control signal into some kind of movement. It obtains a control signal in the form of electric voltage, current, hydraulic fluid, pneumatic or hydraulic pressure. The actuator converts the received control signal into mechanical motion.

<img src="https://i.ytimg.com/vi/penLo7CNeQE/maxresdefault.jpg" width="600" height="400"/>


### 2. Analog and digital

<img src="https://media.cheggcdn.com/study/870/8701e007-8704-4de7-8e43-88799d198442/10298-5.E-6LOC-i1.png" width="600" height="400" />
<img src="https://image1.slideserve.com/3034422/analog-vs-digital-n.jpg" width="600" height="400" />


### Mictroprocessor and Microcontroller

<img src="https://lh3.googleusercontent.com/proxy/rI49srLi-VMYqmw36qHbOEk7uKy0UDi41Q057mv6BOLhcJDttqGY4q8a7YzE6GIJsp8dCt38MXebNhIz36mTnG4iidwe3WHtnWbWLz3hCgcl0aEkUdXeo3lGgfSyOzNkXcrb7QnygIkduLCT80e4zFpJPnLQyqn_eYUP0bRx" width="600" height="600"  />

<img src="https://aast.roben.me/wp-content/uploads/2014/10/comp.jpg" width="600" height="600"/>


### 3. Introduction to Rpi
<img  src="https://www.electronicwings.com/public/images/user_images/images/Raspberry%20Pi/Raspberry%20Pi%20Introduction/Raspberry%20Pi%203%20hardware.png" width="700" height="400"/>
Raspberry Pi as a world’s most inexpensive and powerful Single Board Computer.It is

* Mini Computer
* Limited but large power for its size
* No storage  
* It is a SOC (System On Chip)
* We can connect shields (Shields - addon functionalities)  
* Can connect multiple Pi’s together  
* Microprocessor  
* Can load a linux OS on it  
* Connect to sensors or actuators.  

Interfaces are ways to connect a sensor to a microprocessor.Raspberry Pi interfaces are

* GPIO
* UART
* SPI
* I2C
* PWM

### 4. Serial and Parallel
#### What is Serial communication?
<img src="https://circuitglobe.com/wp-content/uploads/2019/07/serial-communication.jpg" />

In Serial Transmission, data is sent bit by bit from one computer to another in bi-direction where each bit has its clock pulse rate. Eight bits are transferred at a time having a start and stop bit (usually known as a Parity bit), i.e. 0 and 1 respectively.One such interface is **GPIO** which is a general-purpose input/output.

#### What is Parallel communication?
<img src="https://circuitglobe.com/wp-content/uploads/2019/07/parallel-communication.jpg"/>

In Parallel Transmission, various bits are sent together simultaneously with a single clock pulse. It is a fast way to transmit as it uses many input/output lines for transferring the data.Some interfaces are **UART**which stands for Universal Asynchronous Receiver/Transmitter, **SPI** which stands forSerial Peripheral Interface, **I2C** which is is a synchronous, multi-master, multi-slave, packet switched, single-ended, serial computer bus.

<img src="https://www.mbtechworks.com/hardware/imgs/uart-spi-i2c.png" width="600" height="400"/>

#### Difference between Series and Parallel.
<img src="https://image.slidesharecdn.com/4lecture4serialparalleltransmission-170823060418/95/data-communication-computer-networks-serial-and-parellel-transmission-23-638.jpg?cb=1503720848" width="600" height="400"/>



