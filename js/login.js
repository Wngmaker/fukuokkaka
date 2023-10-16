function login() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email == "admin13" && password == "admin123") {
        window.location.href = "./admin.html"
        alert("Chào Ngạnh")
        return;
        
    }
    for (let i = 0; i < users.length; i++) {
        if(users[i].email==email && users[i].password==password){
            // set thông tin user id đã đăng nập vào localstorage
            localStorage.setItem("userId",users[i].id)
            alert("Đăng Nhập Thành Công!!")
            window.location.href="./index.html"
            return;
        }
    }
    alert("Email hoặc Mật Khẩu không đúng")
}
function logOut() {
    localStorage.removeItem("userId")
}
logOut();