function myFunction2()
    {
    let time=document.getElementById("time").value;
    console.log(typeof(time));
    let timeOption= document.querySelector('input[name="time-options"]:checked').value;
    if (timeOption=="hts")
    {
        document.getElementById("output").innerHTML =time+" Hour = "+(time*60*60)+" seconds" ; 
    }
    if (timeOption=="htm")
    {
        document.getElementById("output").innerHTML =time+" Hour = "+(time*60)+" mins" ; 
    }
}