var wl1=[1,2,3,4,5];
var sts1=[2,4,6,8,10];
//var wl2=wl1
//var sts2=[]
//var wl3=[]
//var sts3=[]
var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var africa = [86,114,106,106,107,111,133,221,783,2478];

console.log("CUNT")

///
///

var pubnub = new PubNub({
    publish_key: 'pub-c-f36b6693-3670-4288-ad29-63335c57dcf7',
    subscribe_key: 'sub-c-0c5d50ea-fb04-11e6-8fcb-0619f8945a4f'});

    function $(id) { return document.getElementById(id); }

    var box = $('box'), channel = 'hello_world';
    var ch1 = $('myChart');
    var ch2 = $('myChart');
    var ch3 = $('myChart');

  ////
    var myChart3 = new Chart(ch1, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          data: africa,
          label: "STS-1 White",
          borderColor: "#3e95cd",
          fill: true
        }

      ]
    }
  });
//////
/*    pubnub.addListener({
          message: function(obj) {
              //if (obj[0] == 'STS1')
              if (obj[0] != '')
              {
                box.innerHTML = (''+obj.message).replace( /[<>]/g, '' ) + '<br>' + box.innerHTML}
              if (obj[0] == 'STS2')
              {
                console.log("STS2")
              }
              if (obj[0]== 'R')
              {
                console.log("R")
              }
          }});

    pubnub.subscribe({channels:[channel]});
*/
//});

//////////////////////////////////////////////////
/*var ctx = document.getElementById("myChart");
var myChart2 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: sts2,
        label: "STS-1 White",
        borderColor: "#3e95cd",
        fill: true
      }

    ]
  }
});*/
//////////////////////////////////////////////////
//////////////////////////////////////////////////
/*var ctx = document.getElementById("myChart");
var myChart3 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: sts3,
        label: "STS-1 White",
        borderColor: "#3e95cd",
        fill: true
      }

    ]
  }
});*/
//}
