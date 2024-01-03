var q=["Are you satisfied with our service?","Do you find our website user friendly","Would you recomended us to others?"];
var y=["yes","yes","yes"];
var n=["no","no","no"];


 document.getElementById("q1").innerHTML=q[0];
 document.getElementById("q2").innerHTML=q[1];
 document.getElementById("q3").innerHTML=q[2];

 document.getElementById("y1").innerHTML=y[0];
 document.getElementById("y2").innerHTML=y[1];
 document.getElementById("y3").innerHTML=y[2];
 
 document.getElementById("1n").innerHTML=n[0];
 document.getElementById("2n").innerHTML=n[0];
 document.getElementById("3n").innerHTML=n[0];
 
function anser()
{
var t=0;
var f=0;

if(document.getElementById("t1").checked==true)
{
t+=1
}
else if(document.getElementById("f1").checked==true)
{
   f+=1 
}
if(document.getElementById("t2").checked==true)
{
t+=1
}
else if(document.getElementById("f2").checked==true)
{
   f+=1 
}
if(document.getElementById("t3").checked==true)
{
t+=1
}
else if(document.getElementById("f3").checked==true)
{
   f+=1 
}
alert("yes="+t+" "+"no="+f)

}