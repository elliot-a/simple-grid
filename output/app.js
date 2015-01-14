/* global Highcharts:false, slabs:false, _:false, moment:false */

var testData = {
    values: ['Tories', 'Labour', 'Liberals', 'UKIP', 'Greens'],
    categories: ['18/01/2015', '19/01/2015'],
    data: [
        {
            'Tories' : 130,
            'Labour': 131,
            'Liberals': 80,
            'UKIP': 100,
            'Greens': 33
        },
        {
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
    
    _.forEach([' '].concat(data.values), function(val){
        var head = document.createElement('th');
        head.innerText = val;
        hr.appendChild(head);
    });

    header.appendChild(hr);
    grid.appendChild(header);
    
    var tb = document.createElement('tbody');

    var index = 0;

    _.forEach(data.categories, function(catName){

        var tr = document.createElement('tr');

        var td;
        var val;

        td = document.createElement('td');
        td.innerText = catName;
        tr.appendChild(td);

        var dataObject = data.data[index];

        for(var key in dataObject){
            val = dataObject[key];
            td = document.createElement('td');
            td.innerText = val;
            tr.appendChild(td);
        }


        tb.appendChild(tr);

        index++;

    })


    
    grid.appendChild(tb);

});
