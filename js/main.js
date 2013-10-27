/*
function printName(ce) {
    //debugger;
    console.dir(this); // this = ce.target
    console.dir(ce);
    console.log("my name is Brendan");
    //this.innerText = "I have been clicked";
    var originalText = $(this).text();
    $(this).text("I have been clicked");
}



//$('[type="submit"]').click(printName);
$("button").click(printName);
*/

// view
function hitServer(){
    //alert("hitServer");
    $("h1").text("hitServer button was clicked");
    $.getJSON("https://vimeo.com/api/v2/brad/appears_in.json?callback=?", printResponse);
    //$.getJSON("dummy_server.json", printResponse);
}

function printResponse(response) {
    //alert("printResponse");
    //$("button").text("My name is " + address.name);
    console.dir(response);
    console.log(response[1]);
    console.log(response[1].description)
    $("h3").text(response[1].title);
    var html = '<ul>'
    for (var i=0; i<response.length; i += 1) {
       html += '<li><image src=' + response[i].thumbnail_small + '></li>'; 
    }
    html += '</ul>'
    console.log(html);
    $('body').append(html);
}

// controller    
$("button").click(hitServer);
