function printLength(){
    var str=document.getElementById("name").value;
    var strlen=str.length;
    document.getElementById("demo").innerHTML = "Your name size is "+strlen;//type casting

}

function finalLength(){
    var str=document.getElementById("name").value;
    var strlen=str.length;
    alert("Your final Length is "+strlen)
}