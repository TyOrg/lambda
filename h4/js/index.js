console.log('inside remote worked...');

window.onload = function () {

    //BODY
    var main = { "backgroundColor": "#ff0000", "fontFamily": "sans-serif" };

    for(var a in main) {
        document.body.style[a] = main[a];
    }      
    
    var heading = document.getElementsByTagName('h1')[0]; //aboutme 
        heading.innerHTML = 'About Me';      
    var hdg = { "backgroundColor": "#0000ff", "maxWidth": "350px" };

    for(var b in hdg) {
        heading.style[b] = hdg[b];
    }  


    var s1 = document.getElementById("1");  //nickname
        s1.innerHTML = "Nawashi";
    var s2 = document.getElementById("2"); //favs
        s2.innerHTML = "all things rope";
    var s3 = document.getElementById("3");  //home
        s3.innerHTML = "Texas";

    //IMG
    var picElement = document.createElement("img");
        picElement.src = 'http://lorempixel.com/250/250/sports/8';
        document.body.appendChild(picElement);


       
    //CODE - create class
    function createClass(name,rules){
    var style = document.getElementById('myStyles');
    if(!(style.sheet||{}).insertRule) 
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name+"{"+rules+"}",0);
    }  
    
    //CODE - add class to element loop
    function addClass(clss, elm){
        var x = document.getElementsByTagName(elm);
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].className = clss;
        }
    }
    
    //CREATE class 
    createClass('.listItem',"background-color: white; color: red;");
        
    //ADD class
    addClass("listItem","li");


    




//UNnecessary element
    document.getElementById("test").innerHTML = "...";
    document.getElementById('test').style.backgroundColor = "#c5c5c5";

}



//https://www.youtube.com/watch?v=GBNtL_51l5A