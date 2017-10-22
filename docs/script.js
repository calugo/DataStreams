function publish() {
    console.log("Wowowowowo")
    pubnub = new PubNub({

      publish_key: 'pub-c-f36b6693-3670-4288-ad29-63335c57dcf7',
      subscribe_key: 'sub-c-0c5d50ea-fb04-11e6-8fcb-0619f8945a4f',
      ssl: true
      })

    function publishSampleMessage() {
        console.log("Since we're publishing on subscribe connectEvent, we're sure we'll receive the following publish.");
        var publishConfig = {
            channel : "hello_world",
            message : "Hello from PubNub Docs!"
        }
        pubnub.publish(publishConfig, function(status, response) {
            console.log(status, response);
        })
    }

    pubnub.addListener({
        status: function(statusEvent) {
            if (statusEvent.category === "PNConnectedCategory") {
                publishSampleMessage();
            }
        },
        message: function(message) {
            console.log("New Message!!", message);
        },
        presence: function(presenceEvent) {
            // handle presence
        }
    })
    console.log("Subscribing..");
    pubnub.subscribe({
        channels: ['hello_world']
    });
};
