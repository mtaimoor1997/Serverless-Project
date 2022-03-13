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

IFTT

# Libraries
Pubsub Client

A client library for MQTT messaging. MQTT is a lightweight messaging protocol ideal for small devices. This library allows you to send and receive MQTT messages.

ESP8266WiFi

The ESP8266WiFi library provides a wide collection of C++ methods (functions) and properties to configure and operate an ESP8266 module in station and / or soft access point mode.


# How To Use
Clone this repository, then you need to start a Docker to start up a docker instance of Nuclio

Then we have to install Ardiuno and install the libraries

And to start up a docker instance of RabbitMQ

And then we perform functionality of ifttt on nuclio environment 

To Run The Logger You Can Use CMD Before that you have install Npm Dependency By Following command :

$ sudo apt install npm

To get the notifications of data readings on Telegram, make an IFTTT applet through Webhooks service. After creating applet, write the IP address, name of event and Key in the code of Nuclio function from IFTTT post-URL section and deploy the function. You can find the key through webhooks service on IFTTT. When the Carbon monoxide level going high or low than threshold, an message notification will be sent on user telegram.

