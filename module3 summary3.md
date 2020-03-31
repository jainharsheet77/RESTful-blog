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
                      
                            
