const myButton = document.querySelect('#myButton')
const nameInput = document.querySelect('#nameInput')
const list = document.querySelect('#list')
const input = document.querySelect('#searchInput')
const item = document.querySelectorAll('.item')

console.log(myButton);
myButton.disabled=true;

function isEmpty(){
    if (nameInput.value !=''){
        myButton.disabled=false;
    }else{
        myButton.disabled=true;
    }
}
nameInput.addEventlistener('keyup',isEmpty)

myButton.addEventlistener('click',()=>{
    let newItem=document.createElement('i');
    newItem.textContent=nameInput.value;
    list.appendChild(newItem);
    newItem.classList.add('item');
    const deleteButton=document.createElement('button');
    newItem.appendChild(deleteButton);
    deleteButton.textContent="Delete";

    deleteButton.addEventlistener('click',()=>{
        list.removeChild(newItem);

        const EnterButton=document.querySelector('enter');
        newItem.appendChild(EnterButton);
        enter.textContent="Enter"
        enter.addEventlistener('click',()=>{
            list.removeChild(newItem);
        })

    }) 

    nameInput.value='';
    isEmpty();  

})
function isMatching(full,chunk){
    let result = full.toLowerCase().indexOf(chunk.toLowerCase())!=-1 ? true:false
    return result;
}

for (let item of items)
    if (isMatching(item.textContent,value)==false){
        item.style.display = 'none';
    }else{
        item.style.display='flex';
    }if (confirm('Удалить элемент?')) {
        delete()
    }
       
    