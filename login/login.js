let login = document.getElementById('login-form')
login.addEventListener("submit", (e) => {
    e.preventDefault()

    let users = JSON.parse(localStorage.users)

    let email = document.getElementById("email")
    let pw = document.getElementById("password");

    let check = users.map(index => index.email == email.value.trim() && index.pw == pw.value.trim())
    console.log(check);
    if (check[0] == true){
        window.location.href = "../logout.html"
    } else {
        alert("Please input again")
    }
})  