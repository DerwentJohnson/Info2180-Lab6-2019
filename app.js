window.onload = function() {
var search = document.getElementById("search");

search.addEventListener("click", function(event){
    event.preventDefault();
    var inputString = document.getElementById("input").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET","superheroes.php?q="+inputString,true);
    xhr.onload = function(){
        if(this.status == 200){
            document.getElementById("result").innerHTML = "<ul>"+ this.responseText +"</ul>";
            console.log("OK");
        }
    }
    xhr.send();
})
}