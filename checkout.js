let productPainel = document.getElementById("product-painel");
/* *****************product******************* */

productPainel.addEventListener("click", (e) => {

    let quantity = e.target.parentElement.parentElement.children[1];
    let productPrice = e.target.parentElement.parentElement.parentElement.children[1].children[0].children[0];
    let productTotal = e.target.parentElement.parentElement.parentElement.children[4];

    if (e.target.classList.contains("fa-plus")) {
        quantity.innerText++
        productTotal.innerText = (quantity.innerText * productPrice.innerText).toFixed(2)

    } if (e.target.classList.contains("fa-minus") && quantity.innerText > 1) {
        quantity.innerText--
        productTotal.innerText = (quantity.innerText * productPrice.innerText).toFixed(2)

    } if (e.target.classList.contains("remove-product")) {
        e.target.parentElement.parentElement.parentElement.remove()
    }

    buyDetail()

})

/* ******************buyDatail**************** */

const buyDetail = () => {
    const _productTotal = document.querySelectorAll(".product-line-price")
    const _subtotal = document.getElementById("cart-subtotal").children[1]
    const _tax = document.getElementById("cart-tax").children[1]
    const _total = document.getElementById("cart-total").children[1]
    const _shipping = document.getElementById("cart-shipping").children[1]
    total = 0;
    _productTotal.forEach(e => { total += (+e.innerHTML) })
    _subtotal.innerHTML = total.toFixed(2)
    _tax.innerHTML = (total * 0.18).toFixed(2)
    _shipping.innerHTML = "15.00"
    _total.innerHTML = ((+_subtotal.innerHTML) + (+_tax.innerHTML) + (+_shipping.innerHTML)).toFixed(2)
}
buyDetail()

/* *********************add to cart************** */
const addToCart = document.getElementById("customer-form").children[1];
let nameProduct = document.getElementById("name");
const priceProduct = document.getElementById("price");
const quantityProduct = document.getElementById("quantity");
let products = document.getElementById("products")




const createProduct = (name, price, _quantity) => {
    return `  
    <img src="" alt="${name}">
    <div class="product-info">
        <h2>${name}</h2>
        <div class="product-price">
            <p><strong>${price}</strong> <span class="line-through">${price * 130 / 100}</span></p>
        </div>
        <div class="quantity-controller">
            <button>
                <i class="fas fa-minus"></i>
            </button>
            <p id="product-quantity">${_quantity}</p> 
            <button>
                <i class="fas fa-plus"></i>
            </button>
        </div>
        <div class="product-removal">
            <button class="remove-product">
                Remove
            </button>
        </div>
        <div class="product-line-price">${price * _quantity}</div>

    </div>
`
}


addToCart.addEventListener("click", () => {

    if (nameProduct.value && priceProduct.value && quantityProduct.value) {
        let productdiv = document.createElement("div");
        productdiv.className = "product";
        productdiv.innerHTML = createProduct(nameProduct.value, priceProduct.value, quantityProduct.value)
        products.prepend(productdiv)
        form.reset()
    } else {
        alert("Must be filled out")
    }
    buyDetail()
})



/* ***********form prevent ************* */
const form = document.querySelector("form")
form.addEventListener("click", (e) => {
    e.preventDefault()
})

