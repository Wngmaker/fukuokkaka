let productList = [
    {
        id: 01,
        productName: "Kệ Gỗ SP1 ",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 500000,
        stock: 10,
        mã:24244,
        imageUrl: "../assets/images/product/default/home-1/sp2.1.jpeg"
    },
    {
        id: 02,
        productName: "Kệ Gỗ sp2",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 500000,
        stock: 10,
        mã:24244,
        imageUrl: "../assets/images/product/default/home-1/sp3.1.jpeg"
    },
    {
        id: 03,
        productName: "Kệ Gỗ sp3",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 500000,
        stock: 10,
        mã:24244,
        imageUrl: "../assets/images/product/default/home-1/sp4.1.jpeg"
    },
    {
        id: 04,
        productName: "Kệ Gỗ sp4",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 500000,
        stock: 10,
        mã:24244,
        imageUrl: "../assets/images/product/default/home-1/sp5.1.jpeg"
    },
    {
        id: 05,
        productName: "Kệ Gỗ sp5",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 500000,
        stock: 10,
        mã:24244,
        imageUrl: "../assets/images/product/default/home-1/sp6.1.jpeg"
    },
    {
        id: 06,
        productName: "Kệ Gỗ sp6",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 500000,
        stock: 10,
        mã:24244,
        imageUrl: "../assets/images/product/default/home-1/sp7.1.jpeg"
    },
    {
        id: 07,
        productName: "Kệ Gỗ sp7",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 4500000,
        stock: 10,
        mã:24244,
        imageUrl: "../assets/images/product/default/home-1/sp8.1.jpeg"
    },
    {
        id: 08,
        productName: "Kệ Gỗ sp8",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 700000,
        stock: 10,
        mã:24244,
        imageUrl: "../assets/images/product/default/home-1/sp9.1.jpeg"
    },
    {
        id: 09,
        productName: "Kệ Gỗ sp9",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 800000,
        stock: 10,
        mã:24244
        imageUrl: "../assets/images/product/default/home-1/sp10.1.jpeg"
    },
    {
        id: 10,
        productName: "Kệ Gỗ sp10",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 590000,
        stock: 10,
        mã:24244,
        imageUrl: "../assets/images/product/default/home-1/sp11.1.jpeg"
    },
]
localStorage.setItem("productList", JSON.stringify(productList)); 


render();

function render() {
    let container = document.getElementById("container-list");
    for (let i = 0; i < productList.length; i++) {
        container.innerHTML +=
            `
        <div class="col-6">
            <div class="p-3">
                <div class="card" style="width: 18rem;">
                    <img src="${productList[i].imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${productList[i].productName}</h5>
                                <p class="card-text">${productList[i].description}</p>
                                    <p>${productList[i].price}</p>
                                <button onclick="payment(${productList[i].id})" class="btn btn-primary">Thêm Giỏ Hàng</button>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}


function payment(productId) {
    let product = productList.filter(function (product) {
        return product.id == productId;
    })[0];

    //Get list user trong hệ thống
    let users = JSON.parse(localStorage.getItem('users')) || [];
    // Lấy id của thằng user đã đăng nhập vào hệ thống
    let userId = localStorage.getItem("userId");
    // Lấy được đối tuong user đã login
    console.log(userId);
    if (!userId) {
        alert("Vui lòng đăng nhập");
        window.location.href = "../page/login/html";
    }
    let userLogin = users.filter(function (user) {
        return user.id == userId;
    })[0];
    let checkTonTai = false;
    for (let i = 0; i < userLogin.carts.length; i++) {
        if (userLogin.carts[i].id == productId) {
            userLogin.carts[i].quantity++
            checkTonTai = true;
        }
    }
    if (!checkTonTai) {
        product.quantity = 1;
        userLogin.carts.push(product);
    }
    // Lưu lại list user trng đó user login đã được cập nhật thông tin carts
    localStorage.setItem("users", JSON.stringify(users));
    alert("Add vao thanh toan thanh cong");
    window.location.href = "../pay/payment.html";
}function render() {
    let container = document.getElementById("container-list");
    for (let i = 0; i < productList.length; i++) {
        container.innerHTML +=
            `
        <div class="col-6">
            <div class="p-3">
                <div class="card" style="width: 18rem;">
                    <img src="${productList[i].imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${productList[i].productName}</h5>
                                <p class="card-text">${productList[i].description}</p>
                                    <p>${productList[i].price}</p>
                                <button onclick="payment(${productList[i].id})" class="btn btn-primary">Thêm Vào Giỏ Hàng</button>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}


function payment(productId) {
    let product = productList.filter(function (product) {
        return product.id == productId;
    })[0];

    //Get list user trong hệ thống
    let users = JSON.parse(localStorage.getItem('users')) || [];
    // Lấy id của thằng user đã đăng nhập vào hệ thống
    let userId = localStorage.getItem("userId");
    // Lấy được đối tuong user đã login
    console.log(userId);
    if (!userId) {
        alert("Vui lòng đăng nhập");
        window.location.href = "../login/login.html";
    }
    let userLogin = users.filter(function (user) {
        return user.id == userId;
    })[0];
    let checkTonTai = false;
    for (let i = 0; i < userLogin.carts.length; i++) {
        if (userLogin.carts[i].id == productId) {
            userLogin.carts[i].quantity++
            checkTonTai = true;
        }
    }
    if (!checkTonTai) {
        product.quantity = 1;
        userLogin.carts.push(product);
    }
    // Lưu lại list user trng đó user login đã được cập nhật thông tin carts
    localStorage.setItem("users", JSON.stringify(users));
    alert("Thêm Giỏ Hàng Thành Công");
    window.location.href = "../page/compare.html";
}