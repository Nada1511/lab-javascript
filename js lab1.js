var x =prompt("Enter your first name:  ")
var y =prompt("Enter your last name:   ")


if(x&&y){
    console.log("full name is confirmed: ")
}
else{
    console.log("full name not entered:  ")
}

var birthyear=prompt("enter your birthyear:  ")
var b=2023 
var age= b-birthyear;

document.write("welcome "+x+" "+y +" "+"you are  "+age+"  "+"years old");