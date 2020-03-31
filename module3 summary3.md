## Board Safety Instruction
<table>
    <tr>
      <th>Category</th>
      <th>Do's</th>
      <th>Dont's</th>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td>
        <ul>
          <li>Always make sure that the output voltage of the power supply matches the input voltage of the board.</li>
          <li> While turning on the power supply make sure every circuit is connected properly.</li>
        </ul>
      </td>
      <td>
        <ul> 
          <li> Do not connect power supply without matching the power rating.</li>
          <li> Never connect a higher output(12V/3Amp) to a lower (5V/2Amp) input .</li>
          <li> Do not try to force the connector into the power socket ,it may damage the connector.</li>
        </ul>
      </td>
      <tr>
      <td>Handling</td>
      <td>
        <ul>
          <li>Treat every device like it is energized, even if it does not look like it is plugged in or operational.</li>
          <li> While working keep the board on a flat stable surface (wooden table.</li>
          <li> Unplug the device before performing any operation on them. </li>
          <li>When handling electrical equipment, make sure your hands are dry.</li>
          <li>Keep all electrical circuit contact points enclosed.</li>
          <li>If the board becomes too hot try to cool it with a external usb fan .</li>
        </ul>
        </td>
      <td>
        <ul> 
          <li>Don’t handle the board when its powered ON.</li>
          <li>Never touch electrical equipment when any part of your body is wet, (that includes fair amounts of perspiration).</li>
          <li>Do not touch any sort of metal to the development board.</li>
        </ul>
      </td>
  </tr>
  <tr>
        <td> GPIO </td>
        <td>
          <ul>
            <li>Find out whether the board runs on 3.3v or 5v logic.</li>
            <li>Always connect the LED (or sensors) using appropriate resistors .</li>
            <li>To Use 5V peripherals with 3.3V we require a logic level converter.</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Never connect anything greater that 5v to a 3.3v pin.</li>
            <li>Avoid making connections when the board is running.</li>
            <li>Don't plug anything with a high (or negative) voltage.</li>
            <li>Do not connect a motor directly , use a transistor to drive it .</li>
          </ul>
        </td>
  </tr>     
</table>
                      
## Guidelines for using interfaces(UART,I2C,SPI)
<table>
    <tr>
        <th>UART</th>
        <th>I2C</th>
        <th>SPI</th>
    </tr>
    <tr>
        <td>
            <ul>
                <li>Connect Rx pin of device1 to Tx pin of device2 ,similarly Tx pin of device1 to Rx pin of device2.</li>
                <li>If the device1 works on 5v and device2 works at 3.3v then use the level shifting mechanism(voltage divider)</li>
                <li>Genrally UART is used to communicate with board through USB to TTL connection . USB to TTL connection does not require a protection circuit .</li>
                <li>Whereas Senor interfacing using UART might require a protection circuit.</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>while using I2c interfaces with sensors SDA and SDL lines must be protected.</li>
                <li>Protection of these lines is done by using pullup registers on both lines.</li>
                <li>If you use the inbuilt pullup registers in the board you wont need an external circuit.</li>
                <li>If you are using bread-board to connect your sensor , use the pullup resistor .</li>
                <li>Generally , 2.2kohm <= 4K ohm resistors are used.</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Generally ,Spi in development boards is in Push-pull mode.</li>
                <li>Push-pull mode does not require any protection circuit.</li>
                <li>On Spi interface if you are using more than one slaves it is possible that the device2 can "hear" and "respond" to the master's communication with device1- which is an disturbance .</li>
<li>To overcome this problem , we use a protection circuit with pullup resistors on each the Slave Select line(CS).</li>
                <li>Resistors value can be between 1kOhm ~10kOhm . Generally 4.7kOhm resistor is used.</li>
            </ul>
        </td>
    </tr>
</table>
    
