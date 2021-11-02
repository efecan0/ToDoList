function add(){



let myInput = document.getElementById("inp");

if (myInput.value) {

    
 let newP = document.createElement("li");

 newP.id="a"
 newP.classList.add("newElementClass");
 newP.classList.add("h2");
 newP.addEventListener("click",function(){
     newP.classList.add("line");
 })

 newP.addEventListener("dblclick",function(){
     newP.remove();
 })

 let inputValue= document.getElementById("inp").value;

 console.log(inputValue)

 newP.innerHTML=inputValue;
  
 document.getElementById("inp").value="";
 
 parentElement = document.querySelector("#list") 
 parentElement.appendChild(newP)
  
}



}

function sil(){
    var myobj = document.querySelector("#list");
    myobj.innerHTML=" ";
}

