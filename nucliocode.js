var amqp = require('amqplib');
var url = require('url');
var http = require('http');

let eventmq7 = "MQ7_Telegram"; // initiating the variable for the event created for the usage of Telegram on IFTTT
let api_key = "eB80Zz_6tO9zARyn1My3rtMLCjQp-1aAU_Nw4gAfkD0"; // Using the api key to connect this code to webhooks for ifttt
let caution = true;


        async function logger(message){    // created the function in which connection,channel and queue are initiated to pass the values on rabbitmq
            var queue = 'iot/sensors/mq7';
            const connection = await amqp.connect('amqp://guest:guest@192.168.1.181:5672');
            const channel = await connection.createChannel();
            await channel.assertQueue(queue, {durable: false});
            channel.sendToQueue(queue, Buffer.from(message));
         }

         let sendIFTTT = async function(event, key, value1, value2, value3){  // creating an ifttt function and passing the parameters for it
            var pos_url = `https://maker.ifttt.com/trigger/MQ7_Telegram/with/key/eB80Zz_6tO9zARyn1My3rtMLCjQp-1aAU_Nw4gAfkD0`;
            let postData = JSON.stringify({ value1, value2, value3 });

            var parsedUrl = url.parse(pos_url); //parsing the URL to check the correct path and port are being used
            var post_options = {
                hostname: parsedUrl.hostname,
                port: parsedUrl.port,
                path: parsedUrl.path,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': postData.length
                }
            }; 
            var post_req = http.request(post_options, function(res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log('Response: ' + chunk);
            });
        });

        // Send a POST request to the url with the body..
        post_req.write(postData);
        post_req.end();
    }   

        exports.handler = function(context, event) {  // using the export handler to make the function serverless, i.e it will only work or operate when a event is occured so making it an event based function
            var _occurance = JSON.parse(JSON.stringify(occurance));
            var _info = String.fromCharCode(..._occurance.body.info);

            context.callback("response "+_info);
            logger("CarbonMonOxide Value : "+_info);
            
           if((_info>150)){  // setting the condition for the iFTTT to set a threshold value and post the messages on the desired platform when the value has gone par the threshold
              
                sendIFTTT(eventmq7, api_key, "{Warning:Value is quite High "," CarbonMonOxide  Value is " +_info);
           }
           else 
           {
               sendIFTTT(eventmq7, api_key, "{CarbonMonOxide value  Is under control : " +_info);
          }
            
        };