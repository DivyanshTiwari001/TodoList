let count=1;
document.getElementById('Create').addEventListener("click",createTask);
document.getElementById("Check").addEventListener("click",goto);
document.getElementById("userName").addEventListener("click",gotoLogin);
function goto(){
  window.open('taskRemoved.html');
}
function gotoLogin(){
  window.open('login.html');
}
function createTask(){
    let head = prompt("Enter the task Name");
    if(head==null)return;
    else if(head=='')head=`Task${count}`;
    let body = prompt("Enter the task");
    if(body==null)return;
    else if(body==null || body=='')body=`This is a random Template please edit to add your task`
    let id =`id='Task${count}'`;
    let task = `
    <div class="note" ${id}>
    <h1>${head}</h1>
    <p>
    ${body}
    </p> 
    <button type="button" class="btn btn-outline-success" id="edit"${count} onclick="edit(getId(this))">Edit</button>
    <button type="button" class="btn btn-outline-danger" id="remove"${count} onclick="removeElement(getId(this))">Remove</button>
    </div>`
    let prev=document.getElementById('container').innerHTML;
    prev=prev+task;
    count++;  
    document.getElementById('container').innerHTML=prev;  
}
function getId(btn){
  return btn.id;
}
function edit(obj){
  let head = prompt("Enter the task Name");
  if(head==null || head=='')return;
  let body = prompt("Enter the task");
  if(body==null || body=='')return;
  let doc=document.getElementById(obj).parentNode;
  doc.innerHTML=`
  <h1>${head}</h1>
  <p>
    ${body}
  </p> 
  <button type="button" class="btn btn-outline-success" id="edit"${count} onclick="edit(geId(this))">Edit</button>
  <button type="button" class="btn btn-outline-danger" id="remove"${count} onclick="removeElement(getId(this))">Remove</button>
  `
}
function removeElement(obj){
  let doc=document.getElementById(obj).parentNode;
  doc.remove();
}

