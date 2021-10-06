NSA=[];
function SUBMIT()
{
var na1 = document.getElementById("n1").value;
var na2 = document.getElementById("n2").value;
var na3 = document.getElementById("n3").value;
var na4 = document.getElementById("n4").value;
NSA.push(na1);
NSA.push(na2);
NSA.push(na3);
NSA.push(na4);
console.log(NSA);


document.getElementById("dn").innerHTML=NSA;
document.getElementById("sb").style.display="none";
document.getElementById("st").style.display="inline-block";
}

function SORT()
{
    NSA.sort();
    console.log(NSA);
    document.getElementById("dn").innerHTML=NSA;

}
