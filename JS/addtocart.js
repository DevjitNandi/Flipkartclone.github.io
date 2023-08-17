
    // Add Script
    var x = 0;
    document.getElementById("c").innerText=x;
  function add(val){
     
    document.getElementById("hello").innerHTML +="<li>"+val+"<input type='button' value='x' onclick='remove()'></li>";
    x=x+1;
    document.getElementById("c").innerText=x;
  }

    //removing script
    function remove(){

        var listItem = document.getElementsByTagName("li");
         for(var i = 0; i<listItem.length; i++){

         listItem[i].onclick=function(){
             this.parentNode.removeChild(this);
         }

        }
         
        x = x-1;
        document.getElementById("c").innerText=x;

    }