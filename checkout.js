let plus = document.querySelectorAll(".fa-plus")
let minus = document.querySelectorAll(".fa-minus")
let product = document.querySelectorAll("#product-quantity")


plus.forEach(e => {
    let button = e.parentElement
    button.addEventListener("click", () => {
        let quantity = button.parentElement.children[1].innerHTML++
        let productPrice = button.parentElement.parentElement.children[1].children[0].children[0].innerText
        let _productTotal = (quantity + 1) * productPrice
        button.parentElement.parentElement.children[4].innerHTML = _productTotal.toFixed(2)

        buyDetail()
    })
});

minus.forEach(e => {
    let button = e.parentElement
    button.addEventListener("click", () => {
        if (+(button.parentElement.children[1].innerHTML) > 1) {
            let quantity = button.parentElement.children[1].innerHTML--
            let productPrice = button.parentElement.parentElement.children[1].children[0].children[0].innerText
            let _productTotal = (quantity - 1) * productPrice
            button.parentElement.parentElement.children[4].innerHTML = _productTotal.toFixed(2)
            buyDetail()
        }
    })
});

//function
let buyDetail = () => {
    let productTotal = document.querySelectorAll(".product-line-price")
    const _subtotal = document.getElementById("cart-subtotal").children[1]
    const _tax = document.getElementById("cart-tax").children[1]
    const _total = document.getElementById("cart-total").children[1]
    let _shipping = document.getElementById("cart-shipping").children[1]

    total = 0;
    productTotal.forEach(e => {
        total += Number(e.innerHTML)
    })

    _subtotal.innerHTML = total.toFixed(2)
    _tax.innerHTML = (total * 18 / 100).toFixed(2)
    _shipping.innerHTML = "15.00"
    _total.innerHTML = (Number(_subtotal.innerHTML) + Number(_tax.innerHTML) + Number(_shipping.innerHTML)).toFixed(2)
}
buyDetail()


let remove = () => {
    let _remove = document.querySelectorAll(".remove-product")
    _remove.forEach(e => {
        e.addEventListener("click", () => {
            e.parentElement.parentElement.parentElement.remove()
            buyDetail()
        })
    })

}
remove()






