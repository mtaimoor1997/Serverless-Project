#include <ESP8266WiFi.h>
#include <PubSubClient.h>

// Update these with values suitable for your network.
const char* ssid = "Modem 4G Wi-Fi_0BD1";
const char* password = "02778135";
const char* mqtt_server = "192.168.1.181"; 
const char* mqtt_user = "guest";
const char* mqtt_pass= "guest";

const int mq7pin = A0; //the MQ7 analog input pin

WiFiClient espClient;
PubSubClient client(espClient);

void setup_wifi() {
   //Connecting to a WiFi network
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void reconnect() {
  // Loop until we're reconnected
  Serial.println("In reconnect...");
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (client.connect("Arduino_Gas", mqtt_user, mqtt_pass)) {
      Serial.println("connected");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void setup() {
  Serial.begin(9600);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
}

void loop() {
  char msg[8];
  if (!client.connected()) {
    reconnect();
  }

  sprintf(msg,"%i",analogRead(mq7pin));
  client.publish("iot/sensors/mq7", msg);
  Serial.print("MQ7 gas value:");
  Serial.println(msg);

  delay(5000);
}
