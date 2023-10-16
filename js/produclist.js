function showProduct() {
    let products = JSON.parse(localStorage.getItem("productList"));
    let text = '';
    for (let i = 0; i < products.length; i++) {
        text +=
            `
    <tr>
    <th>${products[i].id}</th>
    <th>${products[i].name}</th>
    <th>${products[i].price} tỷ</th>
    <th><img src="${products[i].src}" class="img-fluid" /></th>
    <th>
    <button type="button" class="btn btn-black" onclick = "deleteProduct(${products[i].id})">Delete</button>
    </th>

</tr>
    `;

        document.getElementById('productDataList').innerHTML = text;
    }
}
showProduct();