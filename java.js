let text1;
    function pervaya(){
    var  num1 = document.getElementById("vvod1").value;
    var  num2 = document.getElementById("vvod2").value;
    text1  = document.getElementById("text1");
    let Result = Number(num1);
    let Result1  = Number(num2);
   let Result2 = (Result1 - Result)*8.3*0.25;
   text1.textContent = Result2;
   
}

let text2;
    function vtoraya(){
    var  num3 = document.getElementById("vvod3").value;
    var  num4 = document.getElementById("vvod4").value;
    var  num5 = document.getElementById("vvod5").value;
    text2  = document.getElementById("text2");
    let Result = Number(num3);
    let Result1  = Number(num4);
    let Result3  = Number(num5);
   let Result4 = Result*(Result1 - Result);
   text1.textContent = Result4;
   
}
let text3;
    function tretya(){
    var  num6 = document.getElementById("vvod6").value;
    text3  = document.getElementById("text3");
    let Result = Number(num6);
   let Result2 = (35 - Result )*2.51;
   text1.textContent = Result2;
   
}