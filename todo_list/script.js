var data=0;
let newTodoInput = document.getElementsByTagName('input')[0];
const addTodoBtn = document.getElementsByTagName('button')[0];
const todolist = document.getElementsByClassName('todos')[0];

const task_complete=document.getElementsByClassName('completed')[0];
const task_notcomplete=document.getElementsByClassName('notcompleted')[0];

async function getText() {
    const api_url = "https://jsonplaceholder.typicode.com/todos";

  let x = await fetch(api_url);
  
  return await x.json();
  //let y = await x.text();
  //console.log(y);
}
async function renderUsers() {

    let users = await getText();
    users.forEach(user => {
        var para = document.createElement("p");
        if(user.completed===true){
            console.log(typeof(user.title));
            para.innerHTML=user.title;
            task_complete.appendChild(para);
            para.onclick = function() {
                para.remove();
            }
        }
        else{
            console.log(typeof(user.title));
            para.innerHTML=user.title;
            task_notcomplete.appendChild(para);
            para.onclick = function() {
                para.remove();
                task_complete.appendChild(para)
            }
        }
    })
   
}
renderUsers();

/*
function checkAge(age) {
    return age > document.getElementById("ageToCheck").value;
  }
  
function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(checkAge);
  }
*/


function additem(){
    var para = document.createElement("p");
    para.setAttribute("key",data);
    
    var input1=newTodoInput.value;
    
    para.innerHTML=input1;

    task_notcomplete.appendChild(para);
    
    data=data+1;
    para.onclick = function() {
        
        para.remove();
        
    }
}

addTodoBtn.addEventListener('click',additem)