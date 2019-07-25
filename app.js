function enterCall(){
    var username = document.getElementById("usernameInput").value;
    var batch = document.getElementById("batch_select").value;
    var role = document.getElementById("role_select").value;
    var subject = document.getElementById("subject_select").value;
    var roomname = batch + "_" + subject + "_" + fullDate;
    if(username !== "" && batch !== "" && role !== "" && subject !== ""){
        localStorage.setItem("roomname",roomname);
        localStorage.setItem("username",username);
        if(role == "Lecturer"){
            location.href = "./lecturer.html";   
        }
        else if(role == "Student"){
            location.href = "./student.html";
        }
    }
    else{
        missingUsername();
    }
}

function missingUsername(){
    var err = document.createElement("div");
    err.innerHTML = "**Please Select All Required Fields";
    var attr = document.createAttribute("class");
    attr.value = "error";
    err.setAttributeNode(attr);
    document.body.appendChild(err);
    var username = document.getElementById("usernameInput").value;
    var batch = document.getElementById("batch_select").value;
    var role = document.getElementById("role_select").value;
    var subject = document.getElementById("subject_select").value;
    if(username == "")
        document.getElementById("usernameInput").className += " error";
    if(batch == "")
        document.getElementById("batch_select").className += " error";
    if(role == "")
        document.getElementById("role_select").className += " error";
    if(subject == "")
        document.getElementById("subject_select").className += " error";
}