const products = [
    {
        id: 1,
        name: "Pikachu",
        price: 200000,
        image: "https://i.pinimg.com/474x/84/50/34/8450342437490d76c3027f1342caa4b9.jpg"
    },
    {
        id: 2,
        name: "Blastoise",
        price: 100000,
        image: "https://i.pinimg.com/564x/54/e7/50/54e750a0ca8d50dfd639a5c243e6d3fb.jpg"
    },
    {
        id: 3,
        name: "Ivysaur",
        price: 300000,
        image: "https://i.pinimg.com/564x/9d/a5/85/9da585297c75b59f64ac7f889cb41c8f.jpg"
    }
];

let cart = [];
let totalCost = 0;
let vat = 0;
let cost = 0;

render()

function render() {
    let content = ""
    products.forEach(function (p) {
        content += `
        <div class="w-1/3 card">
            <img class="w-full" src="${p.image}" alt="">
            <div>
                <h2>${p.name}</h2>
                <p>${p.price}</p>
            </div>
            <button class="cart-btn" onclick="addToCart(${p.id})">Add to cart</button>
        </div>
        `
    })
    shop.innerHTML = content
}

showListCart();
function showListCart() {
    let listProductInCart = `
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
        </tr>
    `;

    let uniqueCart = [...new Map(cart.map((item) => [item['id'], item])).values()];
    uniqueCart.forEach(function (productInCart) {
        let productQuantity = cart.filter((item) => item.id === productInCart.id).length;
        listProductInCart += `
            <tr>
                <td>${productInCart.id}</td>
                <td>${productInCart.name}</td>
                <td>${productInCart.price}</td>
                <td><img src="${productInCart.image}"></td>
                <td>${productQuantity}</td>
            </tr>
        `;
    });
    document.querySelector("#cart").innerHTML = listProductInCart;
}

function addToCart(id) {
    let chosenProduct = products.find((item) => item.id == id);
    cart.push(chosenProduct);

    cost += chosenProduct.price;
    vat = 0.1*cost;
    totalCost = cost+vat;
    
    document.querySelector("#cost").textContent = `$${cost}`;
    document.querySelector("#vat").textContent = `$${vat}`;
    document.querySelector("#total").textContent = `$${totalCost}`;
    showCart();
}
