/* global Highcharts:false, slabs:false, _:false, moment:false */

var testData = {
    values: ['Tories', 'Labour', 'Liberals', 'UKIP', 'Greens'],
    data: [
        {
            'date': Date.now(),
            'Tories' : 130,
            'Labour': 131,
            'Liberals': 80,
            'UKIP': 100,
            'Greens': 33
        }
    ]
};


// display the chart
slabs.getData().then(function (obj) {
    'use strict';
    
    var grid = document.getElementById('grid');
    var data = obj || testData;
    
    var header = document.createElement('thead');
    var hr = document.createElement('tr');
    
    _.forEach(['Date'].concat(data.values), function(val){
        var head = document.createElement('th');
        head.innerText = val;
        hr.appendChild(head);
    });

    header.appendChild(hr);
    grid.appendChild(header);
    
    var tb = document.createElement('tbody');
    
    _.forEach(data.data, function(o){
        var tr = document.createElement('tr');
        var td;
        var val;
        for(var key in o){
            val = o[key];
            if(key === 'date'){
                val = moment(o[key]).format('MMMM Do YYYY');
            }
            td = document.createElement('td');
            td.innerText = val;
            tr.appendChild(td);
        }
        tb.appendChild(tr);
    });
    
    grid.appendChild(tb);

});
