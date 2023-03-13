//C to delete the entire text
document.querySelector("#delete").addEventListener("click",()=>{
    document.querySelector("#display").value ="  ";
})
//backspace
const backspace = () =>{
   const num = document.querySelector("#display").value.slice(0,-1);
   document.querySelector("#display").value = num;
}
//display one
const one = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value="1";
    }
    else{
        document.querySelector("#display").value= document.querySelector("#display").value + "1";
    }
}
//display two
const two = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value="2";
    }
    else{
        document.querySelector("#display").value= document.querySelector("#display").value + "2";
    }
}
//display three
const three = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value="3";
    }
    else{
        document.querySelector("#display").value= document.querySelector("#display").value + "3";
    }
}
//display four
const four = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value="4";
    }
    else{
        document.querySelector("#display").value= document.querySelector("#display").value + "4";
    }
}
//display five
const five = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value="5";
    }
    else{
        document.querySelector("#display").value= document.querySelector("#display").value + "5";
    }
}
//display six
const six = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value="6";
    }
    else{
        document.querySelector("#display").value= document.querySelector("#display").value + "6";
    }
}
//display seven
const seven = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value="7";
    }
    else{
        document.querySelector("#display").value= document.querySelector("#display").value + "7";
    }
}
//display eight
const eight = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value="8";
    }
    else{
        document.querySelector("#display").value= document.querySelector("#display").value + "8";
    }
}
//display nine
const nine = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value="9";
    }
    else{
        document.querySelector("#display").value= document.querySelector("#display").value + "9";
    }
}
//display zero
const zero = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value="0";
    }
    else{
        document.querySelector("#display").value= document.querySelector("#display").value + "0";
    }
}
//display point
const point = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value=".";
    }
    else{
        document.querySelector("#display").value= document.querySelector("#display").value + ".";
    }
}
const sqrt = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value="√";
    }
    else{
        document.querySelector("#display").value= document.querySelector("#display").value+ "√";
    }
}

