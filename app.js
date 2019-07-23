const date = require("./date.js");

function element(id){
    document.getElementById(id);
}
var batch = element("batch_select");
var role = element("role_select");
var subject = element("subject_select");

function enterCallRoom(){
    var username = document.getElementById("userName").value;
    if (username == "" || batch.value == "" || role.value == "" || subject.value ==  ""){
        missingField();
    }
    else{
        localStorage.setItem("username",username);
        location.href = "./lecturer.html";
        var room = document.getElementById("room_select").value;
    }
}
function missingField(){
    var err = document.createElement("div");
    err.innerHTML = "Please Input The Missing Fields";
    var attr = document.createAttribute("class");
    attr.value = "error";
    err.setAttributeNode(attr);
    document.body.appendChild(err);

    //Below Are For Testing Purposes Only And Will Be Deleted Later

    var room = document.getElementById("room_select").value;
    console.log(room);
}