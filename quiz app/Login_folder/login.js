const loginBtn = document.getElementById("btn")
loginBtn.addEventListener("click", (e) => {
    e.preventDefault()

    let emailStorage = localStorage.getItem("storedEmail")
    let pswdStorage = localStorage.getItem("storedPassword")

    let inputEmail = document.getElementById("userEmail").value.trim()
    let inputPswd = document.getElementById("pswd").value.trim()

    let error = document.getElementById("error");

    if (!inputEmail || !inputPswd) {
        swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the fields!"
        })
        return;
    }
    if (inputEmail === emailStorage && inputPswd === pswdStorage) {

        Swal.fire({
            title: "Good job!",
            text: "You have logged in successfully!",
            icon: "success"
        }).then(ok => window.location.href = '../Quiz_Selection_folder/quiz.html')

    } else {
        swal.fire({
            icon: "error",
            title: "Ooh...",
            text: "Invalid Email or Password!"
        })
    }
})

let icon=document.getElementById("icon")
let pswd=document.getElementById("pswd")

icon.onclick=function(){
    if(pswd.type==="password"){
        pswd.type="text"
        icon.className="fa-solid fa-eye"
    }else{
        pswd.type="password"
        icon.className="fa-solid fa-eye-slash"
    }
}