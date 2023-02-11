function divadd() {
    let gettext = document.getElementById('textentry');
    document.querySelector('.tasks').innerHTML += `<div class="displaytask">
    ${gettext.value}
    <div id="buttoncontainer">
    <button id="taskbutton" onclick="remove()">X</button>
    </div>
    </div>`;
    gettext.value = "";
}

function remove() {
    document.querySelector('.displaytask').remove();
}

function clearit(){
    document.querySelector('.tasks').innerHTML="";
    console.log("clicked");
}