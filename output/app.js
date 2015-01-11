/* global Highcharts:false, slabs:false */

// display the chart
slabs.getData().then(function (obj) {
    'use strict';

    // this are the data sent back from the server.
    var dateCreated = obj.created;
    var settingsObj = obj.settings; // this is the object that is saved from the input page
    var chartData = obj.data; // this is the slabs 'output' object

    // slabs output object
    var categories = chartData.categories;
    var series = chartData.series;
    var data = chartData.data;
    var dateFrom = chartData.dateFrom;
    var dateTo = chartData.dateTo;


    // set the page title
    window.document.title = "Sample Pie Chart";

    // get an array of all the series values for highcharts
    var chartSeriesArray = [];
    _.each(chartData.data, function (item){

        // this is just the way highcharts accepts data.
        var datum = [item[categories[0]], Number(item[series[0]])];
        chartSeriesArray.push(datum);
    });

    console.log(chartSeriesArray);

    $('#chart-container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: "Sample Pie Chart"
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: series[0],
            data: chartSeriesArray
        }]
    });

});