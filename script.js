disp=document.getElementById("display");
function press(e){



if (disp.textContent==0) 
{disp.textContent=e;}
else
{disp.textContent=disp.textContent+e;}

}

var num1=0;
operator="";

function setOP(e){
num1=disp.textContent;
disp.textContent="0";
operator=e;

}

function clr(){
  disp.textContent="0";  
}


function calculate(){
    var num2=parseInt(disp.textContent);
    num1=parseInt(num1);

        switch(operator){
            case "+":
                total=num1+num2;
                break;
            case "-":
                total=num1-num2;
                break;
            case "*":
                total=num1 * num2;
                break;
            case "/":
                total=num1/num2; 
                break;
        }
      
    disp.textContent=total;
}