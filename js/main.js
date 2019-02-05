//initialize function called when the script loads
function initialize(){
   //store cityPop so addColumns can reference
    var cityData = cities();
    addColumns(cityData);
    addEvents();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'Billings',
            population: "104,170"
        },
        {
            city: 'Missoula',
            population: "66,788"
        },
        {
            city: 'Great Falls',
            population: "58,505"
        },
        {
            city: 'Bozeman',
            population: "37,280"
        },
        {
            city: 'Butte',
            population: "33,525"
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    return cityPop;

};

///start pasted debug.js code
function addColumns(cityPop){
    console.log(cityPop);
    //for each row add city size column
    $('tr').each(function(i){

    //if top row add header
        if (i == 0){

            $(this).append('<th>City Size</th>');
        } 
        //otherwise add appropriate citysize based on cityPop column
        else {

            var citySize;

            //remove comma and convert to number for comparison
            if (parseFloat(cityPop[i-1].population.replace(/,/g, "")) < 100000){
                citySize = 'Small';

            } else if (parseFloat(cityPop[i-1].population.replace(/,/g, "")) < 500000){
                citySize = 'Medium';

            } else {
                citySize = 'Large';
            };

            $(this).append('<td>' + citySize + '</td>');
        };
    });
};
//add user triggered events
function addEvents(){

    //change to random color on mouseover
    $('table').on("mouseover", function(){

        var color = "rgb(";

        //random number for each value of rgb color
        for (var i=0; i<3; i++){

            var random = Math.round(Math.random() * 255);

            color += random;

            //format correctly for css
            if (i<2){
                color += ",";
            
            } else {
                color += ")";
            }

            //change color
        $(this).css('color', color);

        }

    });

//alert when table is clicked
    function clickme(){
        alert('Hey, you clicked me!');
    };

    $('table').on('click', clickme);
};


//call the initialize function when the window has loaded
$(document).ready(initialize);