const buttons = document.querySelectorAll(".button");
let output = document.getElementById("output");

let a = "";
let b = "";
let operator = "";

buttons.forEach(function(button){
    button.addEventListener("click", getOperator);
});

function getOperator(e){
    if(e.currentTarget.dataset.operator == "/"){
        if(a != ""){
            operator = "/";
        }
    } else if(e.currentTarget.dataset.operator == "*"){
        if(a != ""){
            operator = "*";
        }
    } else if(e.currentTarget.dataset.operator == "-"){
        if(a != ""){
            operator = "-";
        }
    } else if(e.currentTarget.dataset.operator == "+"){
        if(a != ""){
            operator = "+";
        }
    } else if((e.currentTarget.dataset.operator >= 0) && (e.currentTarget.dataset.operator <= 9)){
        if((a == "") && (operator == "")){
            a = e.currentTarget.dataset.operator;
            output.innerText = a;
        } else if((a != "") && (operator == "")){
            a = a.concat(e.currentTarget.dataset.operator);
            output.innerText = a;
        } else if((a != "") && (operator != "") && (b != "")){
            b = b.concat(e.currentTarget.dataset.operator);
            output.innerText = b;
        } else if((a != "") && (operator != "") && (b == "")){
            b = e.currentTarget.dataset.operator;
            output.innerText = b;
        }
    } else if(e.currentTarget.dataset.operator == "."){
        if((a != "") && (operator == "")){
            if(a.includes(".")){
                return;
            } else{
                a = a.concat(".");
                output.innerText = a;
            }
        } else if(a == ""){
            a = "0.";
            output.innerText = a;
        } else if((a != "") && (operator != "") && (b != "")){
            if(b.includes(".")){
                return;
            } else{
                b = b.concat(".");
                output.innerText = b;
            }
        } else if((a != "") && (operator != "") && (b == "")){
            b = "0.";
            output.innerText = b;
        }
    } else if(e.currentTarget.dataset.operator == "delete"){
        if ((a != "") && (b == "")){
            a = a.slice(0, -1);
            output.innerText = a;
        } else{
            b = b.slice(0, -1);
            output.innerText = b;
        }
    } else if(e.currentTarget.dataset.operator == "clear"){
        clear();
    } else if(e.currentTarget.dataset.operator == "="){
        if((a !== "") && (b !== "") && (operator !== "")){
            if(operator == "/"){
                a = parseFloat(a);
                b = parseFloat(b);
                divide(a, b);
            } else if(operator == "*"){
                a = parseFloat(a);
                b = parseFloat(b);
                multiply(a, b);
            } else if(operator == "-"){
                a = parseFloat(a);
                b = parseFloat(b);
                subtract(a, b);
            } else if(operator == "+"){
                a = parseFloat(a);
                b = parseFloat(b);
                add(a, b);
            }
        }
    }
    else{
        console.log("Something went wrong.");
    }
}

function clear(){
    a = "";
    b = "";
    operator = "";
    output.innerText = "";
}

function add(){
    a = a + b;
    output.innerText = a;
    operator = "";
    b = "";
}

function subtract(){
    a = a - b;
    output.innerText = a;
    operator = "";
    b = "";
}

function multiply(){
    a = a * b;
    output.innerText = a;
    operator = "";
    b = "";
}

function divide(){
    if(b == 0){
        alert("No.");
        b = "";
        operator = "";
        return
    }
    a = a / b;
    output.innerText = a;
    operator = "";
    b = "";
}