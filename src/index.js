function myFunction() {
  
    var x = document.getElementById("numb1").value;
    var y = document.getElementById("numb2").value;
    var area= x*y;
    document.getElementById("demo1").innerHTML = "Area is "+ area +" sq. mtr";
    var parameter= (x*2)+(y*2);
    document.getElementById("demo2").innerHTML = "Parameter is "+ parameter +" mtr";
  }