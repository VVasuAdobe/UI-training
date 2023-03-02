
const $ = document;
const SUBMIT =  $.getElementById("submit");
const MYFORM  = $.getElementById("inputForm").elements;
const PRINTMESSAGE = $.getElementById("output");

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

