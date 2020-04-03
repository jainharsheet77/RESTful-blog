## LWM2M
_Lightweight_(LW) _machine to machine_(M2M) is a device management protocol designed for sensor networks and the demands of a M2M environment.

### Overview

<img src="https://docs.devicewise.com/Content/Resources/Images/26804851_462x371.png"/>


<img src="https://www.researchgate.net/profile/Vishwas_Lakkundi/publication/281524900/figure/fig2/AS:284582768332800@1444861227062/LWM2M-interfaces-and-workflow.png" />

### Four logical interfaces defined between the server and client:
* **Bootstrap:** provides the LWM2M Bootstrap Server the ability to provision the LWM2M Client with keying, access control, and configuration of a device, which allows the LWM2M client to register with an LWM2M Server.
* **Client Discovery and Registration:** allows an LWM2M Client to register with the LWM2M Server and report on the capabilities of the device to the LWM2M Server.
* **Device Management and Service Enablement:** allows the LWM2M Server to access the LWM2M client's OIR and perform the following actions on the device's OIR: Read, Write, Execute, Create, Delete, Write Attribute, Discover.
* **Information Reporting:** allows the LWM2M Client to report on periodical or event-based changes of OIRs to the LWM2M Server.
<img src="https://www.thaumatec.com/wp-content/uploads/2018/05/lwm2m-1024x768.png"/>
