//initialize function called when the script loads
function initialize(){
    cities();
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
};

//call the initialize function when the window has loaded
$(document).ready(initialize);