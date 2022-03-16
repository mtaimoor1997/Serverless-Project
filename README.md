# Serverless-Project
# Carbon Monoxide Gas Detector
Carbon monoxide (chemical formula CO) is a colorless, odorless, tasteless, flammable gas that is slightly less dense than air.
Carbon monoxide poisoning occurs when carbon monoxide builds up in your bloodstream. When too much carbon monoxide is in the air, your body replaces the oxygen in your red blood cells with carbon monoxide. This can lead to serious tissue damage, or even death.

The purpose of this project is to detect and monitor Carbon monoxide on an independent platform. By using MQ7 sensor we can check or monitor the amount of Carbon monoxide.

# Tools and Services
MQ7 Sensor

Nuclio

Rabbit MQ

Node Mcu

Docker

Audino

Nodered

# Libraries
Pubsub Client

A client library for MQTT messaging. MQTT is a lightweight messaging protocol ideal for small devices. This library allows you to send and receive MQTT messages.

ESP8266WiFi

The ESP8266WiFi library provides a wide collection of C++ methods (functions) and properties to configure and operate an ESP8266 module in station and / or soft access point mode.


# How To Use
Clone this repository, then you need to start a Docker to start up a docker instance of Nuclio

Then you have to install Ardiuno and install the libraries and run the code of given file of Arduino

And to start up a docker instance of RabbitMQ

And Installing Node-RED as a global module adds the command node-red to your system path. Execute the following at the command prompt:

npm install -g --unsafe-perm node-red

And To install the AMQP components, select the Manage palette option from the right side of the menu bar. Then search for “AMQP” and install node-red-contrib-amqp. If your installation of Node-Red does not have dashboards installed, search for: node-red-dashboard.

Then you have to search and install MOSCA from Manage palette.

And Nodes are added by dragging and dropped them into the center Flow sheet. Logic is created by making connection wires between inputs and output of a node. After the logic is laid out, double click on each of the nodes to configure their specific properties. You will need to specify the MQTT and AMQP definitions of your RabbitMQ IP address,user rights, MQTT topic and AMQP queue name. You will also need to double click on the gauge nodes to configure the look-and-feel of the web dashboard.

After the logic is complete, hit the Deploy button on the right side of the menu bar to run the logic.  The Node-Red dashboard user interface is accessed by: http://ipaddress:1880/ui. 
