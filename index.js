let toggle = document.querySelector('.toggle');

let menu = document.querySelector('.menu');

toggle.onclick = function(){
    if(menu.classList.contains('active')){
        if(submenu1.classList.contains('show')){
        
        submenu1.classList.remove('show');
        menuitem1.classList.toggle("hovered");
        toggle.classList.toggle("rotate");
        menu.classList.toggle('active');
        

    }
    else if(submenu2.classList.contains('show')){
        
        submenu2.classList.remove('show');
        menuitem2.classList.toggle("hovered");
        toggle.classList.toggle("rotate");
        menu.classList.toggle('active');
        
    }
    else if(submenu3.classList.contains('show')){
        
        submenu3.classList.remove('show');
        menuitem3.classList.toggle("hovered");
        toggle.classList.toggle("rotate");
        menu.classList.toggle('active');
        
    }
    else if(submenu4.classList.contains('show')){
        
        submenu4.classList.remove('show');
        menuitem4.classList.toggle("hovered");
        toggle.classList.toggle("rotate"); 
        menu.classList.toggle('active');
        
    }
    }
    toggle.classList.toggle("rotate");
    menu.classList.toggle('active');

}

let menuitem1 = document.querySelector('.menuitem1')

let submenu1 = document.querySelector('.submenu1');

let menuitem2 = document.querySelector('.menuitem2')

let submenu2 = document.querySelector('.submenu2');

let menuitem3 = document.querySelector('.menuitem3')

let submenu3= document.querySelector('.submenu3');

let menuitem4 = document.querySelector('.menuitem4')

let submenu4= document.querySelector('.submenu4');




menuitem1.onclick = function(){
    if(submenu2.classList.contains('show')){
        
        submenu2.classList.remove('show');
        menuitem2.classList.toggle("hovered");
        menuitem1.classList.toggle("hovered");
        submenu1.classList.toggle('show');
    }
    else if(submenu3.classList.contains('show')){
        
        submenu3.classList.remove('show');
        menuitem3.classList.toggle("hovered");
        menuitem1.classList.toggle("hovered");
        submenu1.classList.toggle('show');
    }
    else if(submenu4.classList.contains('show')){
        
        submenu4.classList.remove('show');
        menuitem4.classList.toggle("hovered");
        menuitem1.classList.toggle("hovered");
        submenu1.classList.toggle('show');
    }   
    else{ 
    submenu1.classList.toggle('show');
    menuitem1.classList.toggle("hovered");
    // submenu4.classList.add('newshow');

    }
    // submenu1.classList.toggle('show');

    
}

menuitem2.onclick = function(){
    if(submenu1.classList.contains('show')){
        
        submenu1.classList.remove('show');
        menuitem1.classList.toggle("hovered");
        menuitem2.classList.toggle("hovered");
        submenu2.classList.toggle('show');
    }
    else if(submenu3.classList.contains('show')){
        
        submenu3.classList.remove('show');
        menuitem3.classList.toggle("hovered");
        menuitem2.classList.toggle("hovered");
        submenu2.classList.toggle('show');
    }
    else if(submenu4.classList.contains('show')){
        
        submenu4.classList.remove('show');
        menuitem4.classList.toggle("hovered");
        menuitem2.classList.toggle("hovered");
        submenu2.classList.toggle('show');
    }   
    else{ 
    menuitem2.classList.toggle("hovered");
    submenu2.classList.toggle('show');
    // submenu4.classList.add('newshow');
    }
}

menuitem3.onclick = function(){
    if(submenu1.classList.contains('show')){
        
        submenu1.classList.remove('show');
        menuitem1.classList.toggle("hovered");
        menuitem3.classList.toggle("hovered");
        submenu3.classList.toggle('show');
    }
    else if(submenu2.classList.contains('show')){
        
        submenu2.classList.remove('show');
        menuitem2.classList.toggle("hovered");
        menuitem3.classList.toggle("hovered");
        submenu3.classList.toggle('show');
    }
    else if(submenu4.classList.contains('show')){
        
        submenu4.classList.remove('show');
        menuitem4.classList.toggle("hovered");
        menuitem3.classList.toggle("hovered");
        submenu3.classList.toggle('show');
    }   
    else{ 
    menuitem3.classList.toggle("hovered");
    submenu3.classList.toggle('show');
    
    }
}

menuitem4.onclick = function(){
    if(submenu1.classList.contains('show')){
        
        submenu1.classList.remove('show');
        menuitem1.classList.toggle("hovered");
        menuitem4.classList.toggle("hovered");
        submenu4.classList.toggle('show');
    }
    else if(submenu2.classList.contains('show')){
        
        submenu2.classList.remove('show');
        menuitem2.classList.toggle("hovered");
        menuitem4.classList.toggle("hovered");
        submenu4.classList.toggle('show');
    }
    else if(submenu3.classList.contains('show')){
        
        submenu3.classList.remove('show');
        menuitem3.classList.toggle("hovered");
        menuitem4.classList.toggle("hovered");
        submenu4.classList.toggle('show');
    }   
    else{ 
        menuitem4.classList.toggle("hovered");
    submenu4.classList.toggle('show');
    // submenu4.classList.add('newshow');
    }
}







const todos=document.querySelectorAll(".todo");
const all_status=document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach(todo=>{
    todo.addEventListener("dragstart",dragStart);
    todo.addEventListener("dragend",dragEnd);
});

function dragStart(){
    draggableTodo=this;
    console.log("dragStart");
}

function dragEnd(){
    draggableTodo=null;
    console.log("dragEnd");
}

all_status.forEach(status=>{
    status.addEventListener("dragover",dragOver);
    status.addEventListener("dragenter",dragEnter);
    status.addEventListener("dragleave",dragLeave);
    status.addEventListener("drop",dragDrop);
});

function dragOver(e){
    e.preventDefault();
    // console.log("dragOver");

}
function dragEnter(){
    console.log("dragenter");
}

function dragLeave(){
    console.log("dragleave");
}
function dragDrop(){
    
    this.appendChild(draggableTodo);
    
    console.log("Dropped");
}