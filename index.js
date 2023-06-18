Add=()=>
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("f").textContent=(a+b);

}

Sub=()=>
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("f").textContent=(a-b);

}

Mul=()=>
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("f").textContent=(a*b);

}

Div=()=>
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("f").textContent=(a/b);

}