function newItem() {
    //javascript
    //1. Adding a new item to the list of items: 
    let li = document.createElement("li");
    li.innerText = '';
    let inputValue = document.querySelector("#input").value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let list = document.querySelector('#list');
        list.appendChild(li);
    }

    function crossOut() {
        li.classList.toggle("strike");
    }

    li.addEventListener("dblclick", crossOut);

    let crossOutButton = document.createElement("crossOutButton");
    crossOutButton.appendChild(document.createTextNode("    X"));
    li.appendChild(crossOutButton);

    crossOutButton.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete")
    }

    $('#list').sortable();
}






//function NewItem() {

//let li = $('<li></li>');
//let InputValue = $('input').val();
//li.append(InputValue);

//if (InputValue === '') {
//     alert("Must Enter Text before value will be added.")
// } else {
//     let list = $('#list');
//     list.append(li);
// }

//     function Remove() {
//         li.toggleClass('strike');
//     }
//     li.on('dblclick', Remove);

//     let RemoveButton = $('<button></button>');
//     RemoveButton.append(document.createTextNode('X'));
//     li.append(RemoveButton);

//     RemoveButton.on('click', DeleteListItem);

//     function DeleteListItem() {
//         li.addClass('delete');
//     }

//     $('list').sortable();
// }
