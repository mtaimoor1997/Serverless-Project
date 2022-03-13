# Serverless-Project
# Carbon Monoxide Gas Monitoring
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
PubSubClient

ESP8266WIFI

# How To Use
Clone this repository, then you need to start a Docker to start up a docker instance of Nuclio, use this command on nuclio:

$ sudo docker run -p 8070:8070 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp:/tmp nuclio/dashboard:stable-amd64

And to start up a docker instance of RabbitMQ, with the command:

$ sudo docker run -p 9000:15672 -p 1883:1883 -p 5672:5672 cyrilix/rabbitmq-mqtt

To Run The Logger You Can Use CMD Before that you have install Npm Dependency By Following command :

$ sudo apt install npm

To get the notifications of data readings on Telegram, make an IFTTT applet through Webhooks service. After creating applet, write the IP address, name of event and Key in the code of Nuclio function from IFTTT post-URL section and deploy the function. You can find the key through webhooks service on IFTTT. When the soil moisture level gets below or higher than threshold, an message notification will be sent on user telegram.

