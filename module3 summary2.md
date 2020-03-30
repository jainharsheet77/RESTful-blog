## Microprocessor Interface
<img src="https://www.mbtechworks.com/hardware/imgs/uart-spi-i2c.png" width="700" height="500"/>

### 1. GPIO
#### What is GPIO?
It is a parallel interface used for communication.It stands for "General Purpose Input/Output." GPIO is a type of pin found on an integrated circuit that does not have a specific function. While most pins have a dedicated purpose, such as sending a signal to a certain component, the function of a GPIO pin is customizable and can be controlled by software.A GPIO port handles both incoming and outgoing digital signals.
GPIO can be used as Input or Output.
As an input port, it can be used to compare digital readings received from sensors.
As an output port, it can be used as a switch to turn ON/OFF devices.

<img src="https://www.electronicwings.com/public/images/user_images/images/Raspberry%20Pi/RaspberryPi_GPIO/Raspberry%20pi%203%20GPIO_pins_v2.png" width="500" height="300"/>

##### GPIO pins in Raspberrypi.

### 2. UART
#### What is UART?
It is used in Serial communication.**UART** is a _Universal Asynchronous Receiver Transmitter_ used for serial communication in embedded systems. It has two lines Tx(Transmit) and Rx(Receive).One of the best things about UART is that it only uses *two wires to transmit data* between devices.

<img src="https://www.circuitbasics.com/wp-content/uploads/2016/01/Introduction-to-UART-Basic-Connection-Diagram-300x147.png" width=" 200" height="200"/>

#### Working of UART
In UART communication, two UARTs communicate directly with each other. The transmitting UART converts parallel data from a controlling device like a CPU into serial form, transmits it in serial to the receiving UART, which then converts the serial data back into parallel data for the receiving device. Only two wires are needed to transmit data between two UARTs. Data flows from the Tx pin of the transmitting UART to the Rx pin of the receiving UART.

<img src="https://www.circuitbasics.com/wp-content/uploads/2016/01/Introduction-to-UART-Data-Transmission-Diagram-768x331.png" width="400" heigth="200"/>

Steps:-
1. The transmitting UART receives data in parallel from the data bus.
2. The transmitting UART adds the start bit, parity bit, and the stop bit(s) to the data frame:
<img src="https://www.circuitbasics.com/wp-content/uploads/2016/01/Introduction-to-UART-Data-Transmission-Diagram-UART-Adds-Start-Parity-ad-Stop-Bits-2-300x179.png" width="300" height="150"/>
3.The entire packet is sent serially from the transmitting UART to the receiving UART. The receiving UART samples the data
line at the pre-configured baud rate.
4.  The receiving UART discards the start bit, parity bit, and stop bit from the data frame.
5. The receiving UART converts the serial data back into parallel and transfers it to the data bus on the receiving end.

#### Implementation :-Typically the path of the file is 
> /dev/ttyxxx
#### where xxx is the UART interface name.
#### We can talk to the UART device by reading and writing to the file.

| Advantages                                               |      Disadvantages                                             |
|----------------------------------------------------------|----------------------------------------------------------------|
| Use only 2 wires, no clock signal required.              | Size of data frame limited to 9 bits.                          |
| Has parity bit to allow for error checking.              | Doesn't support multiple master or multiple slave system       |
|Structure of data frame can be changed and well documented.|he baud rates of each UART must be within 10% of each other    |


##
