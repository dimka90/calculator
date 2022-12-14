// function getUserInput(value){
//     let userInput=document.querySelector(".screen");
//    let output= userInput.textContent+=value;

//    return output


//     // console.log(userInput)
// }
// function percalculation(){
//     let userInput=document.querySelector(".screen");
//     let output= userInput.textContent+=value;
// let result=eval(getUserInput)
//     getUserInput(eval())

    
// }
function getUserClick(){
    
    let operand=document.querySelectorAll(".buttons");
    // let operator=document.querySelectorAll(".operand");
   operand.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        // let userInput=document.querySelector(".screen");
        // userInput.textContent+=value;
        let userInput=document.querySelector(".screen");
        let value=e.target.dataset.num;
        if(value==="="){
           result= eval(userInput.textContent)
             userInput.textContent=result;

            
        }
        else if(value==="C"){
           
              userInput.textContent="";
 
             
         }
        else{
           
            let output= userInput.textContent+=value;

        }
        


    });
    
    

});
}

getUserClick()

