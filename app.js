let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2")

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let mul = document.querySelector("#mul");
let div = document.querySelector("#divi")
let display_result = document.querySelector("#result");

function addnums (a,b) {
    let sum=a+b;
    return sum;
}
function subnums (a,b) {
    let diff=a-b;
    return diff;
}
function mulnums (a,b) {
    let product=a*b;
    return product;
}
function divnums (a,b) {
    let quo=a/b;
    return quo;
}




plus.addEventListener("click", function() {
    if (num1.value.trim() =="" || num2.value.trim() =="") {
        alert("Fileds are empty");

    }else {
        let num_1= parseInt(num1.value);
        
        let num_2 =parseInt(num2.value);
        //alert(addnums (num_1,num_2));
        display_result.innerHTML =addnums(num_1,num_2);
    }

        


});

minus.addEventListener("click", function() {
    if (num1.value.trim() =="" || num2.value.trim() =="") {
        alert("Fileds are empty");

    }else {
        let num_1= parseInt(num1.value);
        
        let num_2 =parseInt(num2.value);
        //alert(addnums (num_1,num_2));
        display_result.innerHTML =subnums(num_1,num_2);
    }

});

mul.addEventListener("click", function() {
    if (num1.value.trim() =="" || num2.value.trim() =="") {
        alert("Fileds are empty");

    }else {
        let num_1= parseInt(num1.value);
        
        let num_2 =parseInt(num2.value);
        //alert(addnums (num_1,num_2));
        display_result.innerHTML =mulnums(num_1,num_2);
    }
});

div.addEventListener("click", function() {
    if (num1.value.trim() =="" || num2.value.trim() =="") {
        alert("Fileds are empty");

    }else {
        let num_1= parseInt(num1.value);
        
        let num_2 =parseInt(num2.value);
        //alert(addnums (num_1,num_2));
        display_result.innerHTML =divnums(num_1,num_2).toFixed( 2 );
    }

});