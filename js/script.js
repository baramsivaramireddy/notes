//$("button").has("a").css("border-color","#0f0");


var button = document.getElementById('menu'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('phone_menu');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'flex';
        div.style.flexDirection= 'column'
        div.style.textAlign = "center"
        div.style.textDecoration = "none"
        div.style.color = "white"
        div.style.marginTop= "1rem"
        
       

    }
};