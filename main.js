const form = document.querySelector("#form")
const fields = ["name", "price", "image"]
const shop = document.querySelector("#shop")
const products = [{ name: "blastoise", price: 100, image: "https://i.pinimg.com/474x/84/50/34/8450342437490d76c3027f1342caa4b9.jpg" }]

form.onsubmit = function (e) {
    e.preventDefault()
    const formData = new FormData(form)
    const data = {}
    let error = false
    for (let i = 0; i < fields.length; i++) {
        const dataField = formData.get(fields[i])
        const errorField = document.querySelector("#" + fields[i] + "-error")
        errorField.innerText = ""
        if (!dataField) {
            errorField.innerText = "Vui lòng nhập dữ liệu"
            error = true
        }
        data[fields[i]] = formData.get(fields[i])
    }
    if (!error) {
        products.push(data)
        form.reset()
        render()
        alert("Thêm mới thành công")
    }
}

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
            <button class="cart-btn">Add to cart</button>
        </div>
        `
    })
    shop.innerHTML = content
}