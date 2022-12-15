
function getUserClick(){
    
    let operand=document.querySelectorAll(".buttons");
    let equalBtn=document.querySelector(".button-two");
    let display=document.querySelector(".screen");
    let clearBtn=document.querySelector(".button-clr");
    let deleteBtn=document.querySelector(".button-del");
    // let operator=document.querySelectorAll(".operand");
   operand.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let value=e.target.dataset.num;

        display.textContent+=value
        

    });
});
equalBtn.addEventListener("click",(e)=>{
let result=eval(display.textContent)
display.textContent=result;

});
clearBtn.addEventListener("click",(e)=>{
    display.textContent=""

});
deleteBtn.addEventListener("click",(e)=>{
let delNum=display.textContent.slice(0,-1);
display.textContent=delNum;
})
}

getUserClick()

