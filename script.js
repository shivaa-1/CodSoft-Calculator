//create container element using DOM 
let container=document.createElement('div');

container.setAttribute('class', 'container d-flex flex-column flex-content-center');

container.innerHTML=`
<div class="heading">
    <h1 id="title" class="text-center">Calculator</h1>
    <h4 id="description" class="text-center">Perform All your Calculations at one place</h4>
</div>

 
<div class="calculator">
<input type="text"  placeholder="0" id="result">
<button class="btns" onclick="clr()" id="clear">AC</button>
<button class="btns" onclick="del()" id="delete">DEL</button>
<button class="btns" onclick="display('%')" id="modulus">%</button>
<button class="btns" onclick="display('/')" id="divide">/</button>
<button class="btns" onclick="display('7')" id="7">7</button>
<button class="btns" onclick="display('8')" id="8">8</button>
<button class="btns" onclick="display('9')" id="9">9</button>
<button class="btns" onclick="display('*')" id="multiply">*</button>
<button class="btns" onclick="display('4')" id="4">4</button>
<button class="btns" onclick="display('5')" id="5">5</button>
<button class="btns" onclick="display('6')" id="6">6</button>
<button class="btns" onclick="display('-')" id="subtract">-</button>
<button class="btns" onclick="display('1')" id="1">1</button>
<button class="btns" onclick="display('2')" id="2">2</button>
<button class="btns" onclick="display('3')" id="3">3</button>
<button class="btns" onclick="display('+')" id="add">+</button>
<button class="btns" onclick="display('.')" id="decimal">.</button>
<button class="btns" onclick="display('0')" id="0">0</button>
<button class="equalBtn btns" onclick="calculate('=')" id="equal">=</button>
</div>
`;

document.body.append(container);


let outputDisplay=document.getElementById('result');


//function to display the value in input box 
function display(val){
    if(val==="." && outputDisplay.value.includes('.')){
        return 
    }
    else outputDisplay.value+=val;
}


//function to evaluate the data 
function calculate(){
     try {
        outputDisplay.value=eval(outputDisplay.value).toFixed(2);
        
     } catch (error) {
        invalidToast.show();
     }
}

function clr(){
    outputDisplay.value="";
}

function del(){
    outputDisplay.value=outputDisplay.value.slice(0,-1);
}