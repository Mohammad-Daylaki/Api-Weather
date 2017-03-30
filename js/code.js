var URL ='http://api.wunderground.com/api/cda2f61b5ee0b1ed/hourly/q/IQ/Erbil.json'

$(document).ready(function(){
  makeAjaxRequest();
})

function makeAjaxRequest() {
  $.ajax({
    url: URL,
    type: 'get',
    dataType: 'json',
    success: function(response){
      showResult(response);
    }
  })
}

function getHours(json) {
  return $.map(json.hourly_forecast,function(obj){
    return obj.FCTTIME.hour
  })
}

function getTemp(json) {
  return $.map(json.hourly_forecast,function(obj){
    return obj.temp.metric
  })
}

function showResult(json) {
  // var myLineChart = new Chart.Line(ctx).Line(data); in our lab
  var data = {
    labels: getHours(json),
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: getTemp(json),
            spanGaps: false,
        },
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: getTemp(json),
            spanGaps: false,
        }
    ]
};
  var ctx = document.getElementById('chartCanvas').getContext('2d')

  var myLineChart = Chart.Bar(ctx, {
      data: data,
  });
}
