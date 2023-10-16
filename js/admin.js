function showUsers() {
    let users = JSON.parse(localStorage.getItem("users"))
    let text = "";
    for (let i = 0; i < users.length; i++) {
        text +=
            `
        <tr>
            <td>${i + 1}</td>
            <td>${users[i].id}</td>
            <td>${users[i].name}</td>
            <td>${users[i].email}</td>
            <td>${users[i].role}</td>
            <td><button class="btnss" onclick="blockUsers()">${users[i].action ? "Chặn" : "Mở Chặn"}</button><button class="btnss" onclick="deleteUser(${users[i].id})">Xoá</button></td>
        </tr>
        `
    }
    document.getElementsByClassName("tbody")[0].innerHTML = text
}
showUsers()

function addUser() {
    var username = document.getElementById("username").value;
    if (username === "") {
        alert("Vui lòng nhập tên người dùng!");
        return;
    }

    var userList = document.getElementById("user-list");
    var listItem = document.createElement("li");
    listItem.innerHTML = username + ' <button onclick="deleteUser(this)">Xóa</button>';
    userList.appendChild(listItem);
    document.getElementById("username").value = "";
}

let users = [];

function showAddUserForm() {
    document.getElementById("add-user-form").style.display = "block";
}

function addUser() {
    const username = document.getElementById("username").value;
    if (username) {
        users.push(username);
        displayUserInfo();
        document.getElementById("username").value = "";
    }
}
function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == index) {
            users.splice(i, 1)
            localStorage.removeItem("userId")
            localStorage.setItem("users", JSON.stringify(users))
            showUsers()
        }
    }
}
function blockUsers() {
    let loggedUser = JSON.parse(localStorage.getItem("userId"));
    let users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
        users[i].action = !users[i].action;
        localStorage.setItem("users", JSON.stringify(users));
        if (loggedUser == users[i].id) {
            localStorage.removeItem("userId")
        }
        showUsers()
    }
}
blockUsers()

