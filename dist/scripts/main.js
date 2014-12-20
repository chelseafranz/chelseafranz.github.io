
// down arrow animation
// $('.down').mouseenter(function  () {
// 	$('.down').addClass('animated bounce');
// });
// $('.down').mouseleave(function  () {
// 	$('.down').removeClass('animated bounce');
// });

var ctx = $("#myChart").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.


var data = [
    {
        value: 9,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "JQuery"
    },
    {
        value: 4,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "JavaScript"
    },
    {
        value: 5,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "HTML5/SCSS"
    },
    {
        value: 5,
        color: "HSLA(161, 41%, 64%, 1)",
        highlight: "#FFC870",
        label: "Angular/Backbone"
    }
];

var options= {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : false,
    responsive: true,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 50, 
    animationSteps : 100,
    animateScale: false,
    animationEasing : "easeOutBounce",
    animateRotate : true,

  	showTooltips: true,
  	tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
  	 tooltipEvents: ["mousemove", "touchstart", "touchmove", "click"],
      
       
        scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

   	
   	 tooltipFontColor: "white",
   	  tooltipFillColor: "rgba(0,0,0,0.8)",


};

new Chart(ctx).Doughnut(data, options);


$('.wandrlst').on('click', function(){
	$('.description').html("wandrlst:");
});
$('.codeRockstar').on('click', function(){
	$('.description').html("Code Rockstar:");
});
$('.nimbus').on('click', function(){
	$('.description').html("Curious Nimbus:");
});
$('.portfolio').on('click', function(){
	$('.description').html("Portfolio:");
});

