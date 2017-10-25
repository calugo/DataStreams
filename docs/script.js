//PubNub
var pubnub = new PubNub({
    publish_key: 'pub-c-f36b6693-3670-4288-ad29-63335c57dcf7',
    subscribe_key: 'sub-c-0c5d50ea-fb04-11e6-8fcb-0619f8945a4f'
});

var status= 'Status: Offline'
// Our labels along the x-axis
//var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
//var africa = [86,114,106,106,107,111,133,221,783,2478];
//var asia = [282,350,411,502,635,809,947,1402,3700,5267];
//var europe = [168,170,178,190,203,276,408,547,675,734];
//var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
//var northAmerica = [6,3,2,2,7,26,82,172,312,433];

var wlen=[];
var sts1=[];
var sts2=[];
var Rf=[];

var ctx = document.getElementById("myChart");
var ctx2 = document.getElementById("myChart2");
var ctx3 = document.getElementById("myChart3");
var bbx = document.getElementById("box");
var channel = 'hello_net';
box.innerHTML = status;

////////////////////////////////////
var mch = new Chart(ctx, {
  type: 'line',
  data: {
    labels: wlen,
    datasets: [
      {
        data: sts1,
        //label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  }
})
/////////////////////////////////////
var mch2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: wlen,
    datasets: [
      {
        data: sts2,
        //label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  }
})
/////////////////////////////////////
var mch3 = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: wlen,
    datasets: [
      {
        data: Rf,
        //label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },

  options: {
           scales: {
               yAxes: [{
                   ticks: {
                       //beginAtZero:true,
                       min: 0,
                       max: 20
                   }
                 }]
              }
           }

})
/////////////////////////////////////

////////////////////////////////
pubnub.addListener({
         message: function(obj) {
             //console.log(obj)

             if (obj[0] != '')
             {
               status= 'Status: Streaming!'
               box.innerHTML = status
               var q=obj.message.split(";")

               if ((q[0]=="WL")&& (wlen.length==0)){
                 q.shift()
                 wlen=q.map(function (x) {
                     return parseFloat(x).toFixed(2);
                   });

                 //console.log("wlen")
               }

               if (q[0] == "STS1")
               {
                //console.log("STS2")
                q.shift()
                sts1=q.map(function (x) {
                    return parseFloat(x).toFixed(2);
                  });
                if (wlen.length>0){
                 //console.log("STS1-READY!")
                 //////////
                 //console.log(ctx)
                 //console.log(mch.canvas.getContext('2d'))
                 //console.log(mch.data)
                 //console.log(mch)
                 mch.data.labels=wlen
                 //console.log(mch.data.datasets[0])
                 mch.data.datasets[0].data=sts1
                 mch.update()
                 //console.log(mch)
                 //MyChart.data.datasets.forEach((dataset) => {
                //   dataset.data.push(sts1);
                 //});
                 /////////
                 //myChart.update()
                }

               }

               if (q[0] == "STS2")
               {
                //console.log("STS2")
                q.shift()
                sts2=q.map(function (x) {
                    return parseFloat(x).toFixed(2);
                  });
                if(wlen.length>0){
                //console.log("STS2")
                mch2.data.labels=wlen
                //console.log(mch.data.datasets[0])
                mch2.data.datasets[0].data=sts2
                mch2.update()
                }
               }

              if (q[0]== 'R')
              {
                q.shift()
                Rf=q.map(function (x) {
                    return parseFloat(x).toFixed(2);
                  });
                if(wlen.length>0){
                //console.log("R")
                mch3.data.labels=wlen
                //console.log(mch.data.datasets[0])
                mch3.data.datasets[0].data=Rf
                mch3.update()
               }
              }

              if(q[0]=='final'){
                status= 'Status: Offline'
                box.innerHTML = status
              }
            }
            else{
              status= 'Status: Offline'
              box.innerHTML = status
            }
         }});

pubnub.subscribe({channels:[channel]});

//});
////////////////////////////////

//  var myChart2 = new Chart(ctx2,{
//    type: 'line',
//    data:{
//      labels: years,
//      datasets: [
//      {
//        data: europe,
//        label: "Europe",
//        borderColor: "#8e5ea2",
//        fill: false
//      }
//    ]}
//  })


//     {
//        data: northAmerica,
//        label: "North America",
//        borderColor: "#c45850",
//        fill: false
//      }
//    ]
//  }
//});
