var amqp = require('amqplib'); // using amqp library for connecting it with the url 
var argv = require('minimist')(process.argv.slice(2))
const TOPIC = 'iot/sensors/mq7' // calling the topic name to connect it with rabbitmq and nuclio

if(argv.h || argv._.length === 0){  // passing the argument to write the IP during the console
    console.log("logger.js [192.168.1.181]")
    process.exit();
}

let main = async (ip) => { // initiating the ip used for connecting the esp8266 module and sensor with rabbitmq
	const connection = await amqp.connect('amqp://guest:guest@192.168.1.181:5672');
	process.once('SIGINT', () => connection.close());

    const channel = await connection.createChannel(); // creating the channel for transmission of messages on rabbitmq
    console.log(' [*] Waiting for messages. To exit press CTRL+C');
	await channel.assertQueue(TOPIC,{durable:false}); // initiating the queue after creating the channel
	await channel.consume(TOPIC, (message) => {
		if (message !== null) {
            const data = new Date()
            const now = data.getUTCFullYear() +"/"+ (data.getUTCMonth()+1) +"/"+ data.getUTCDate() + " " + data.getUTCHours() + ":" + data.getUTCMinutes() + ":" + data.getUTCSeconds()
            console.log(" ["+now+"] %s: '%s'", message.fields.routingKey, message.content.toString());
			channel.ack(message);
		}
	});
}

main(argv._[0])
	.then((msg) => console.log('Logging on queue:' + TOPIC))
	.catch((err) => console.error(''+ err));
