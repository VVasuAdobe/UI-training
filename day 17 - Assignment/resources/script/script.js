
const $ = document;
const SUBMIT =  $.getElementById("submit");
const MYFORM  = $.getElementById("inputForm").elements;
const PRINTMESSAGE = $.getElementById("output");
const DEECREMENT = $.getElementById("decrement");
const INCREMENT = $.getElementById("increment"); 
const COUNT = $.getElementById("count");

SUBMIT.addEventListener("click",function(event){
    event.preventDefault();
    FORMSUBMIT();
});



const FORMSUBMIT = () =>{
    
    let productName =convertToUppercase(getValueByName("name"));
    let productPrice =increaseBy10(convertToNumber(getValueByName("price")));;
    printMessage(productName,productPrice);

}

let convertToUppercase = (input) =>{
    input = input.toUpperCase();
  return  input;
}

let increaseBy10 = (number) =>{
    return number + 10;
}

let convertToNumber =(StringInput) =>{
    return Number(StringInput)
}

let getValueByName =(name)=>{
 let value = MYFORM[name].value;
 return value;
}


let printMessage = (productName,productPrice) =>{
    let message = `You have selected the product: ${productName} of price ${productPrice} !`;
    PRINTMESSAGE.innerHTML = message;
}

let getIntCount = () => {
    let count = convertToNumber(COUNT.value); 
    return count;
}

let decrement = (count) => {

    if(count <= 0){
        console.log("not possibele")
    }
    else{
        count -= 1;
        pusToCount(count);
    }
}

let increment = (count) => {

    if(count >= 100){
        console.log("not possibele")
    }
    else{
        count += 1;
        pusToCount(count);
    }
}

let pusToCount = (count) =>{
    COUNT.value = count;
}

DEECREMENT.addEventListener("click",function(){
    decrement(getIntCount());
  
});

INCREMENT.addEventListener("click",function(){
    increment(getIntCount());
  
});