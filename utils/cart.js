export function loadcart(){
    let cartString = localStorage.getItem("cart") 
    
    if(cartString == null){
        localStorage.setItem("cart", "[]")
        cartString = "[]"

    }

    const cart = JSON.parse(cartString)

    return cart
}

export function addToCart(product , quantity){

    let cart = loadcart() 

    const existingItemIndex = cart.findIndex(
        (item) =>{
        return item.productID == product.productID
        }
    )

    if(existingItemIndex == -1){

        if(quantity<1){
            console.log("Quantity must be at least 1")
        }
        const CartItem = {
            productID : product.productID,
            name : product.name,
            price : product.price,
            labelledPrice : product.labelledPrice,
            quantity : quantity,
            images : product.images
        }
        cart.push(CartItem)

    }else{

        const existingitem = cart[existingItemIndex]

        const newQuantity = existingitem.quantity + quantity

        if (newQuantity < 1){
            cart = cart.filter(
                (item)=>{
                    return item.productID != product.productID
                }
            )
        }else{
            cart[existingItemIndex].quantity = newQuantity
        }

    }

    localStorage.setItem("cart", JSON.stringify(cart))

}