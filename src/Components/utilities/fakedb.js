//Use Local storage to manage cart data
const addTodb = _id =>{
    let shoppingCart;

    //Get the shopping Cart
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        console.log(storedCart);
    }else{
        shoppingCart = {};
    }
    
    // const quantity = localStorage.getItem(_id);
    const quantity = shoppingCart[_id];
    if(quantity){
        // const newQuantity = parseInt(quantity) + 1;
        const newQuantity = quantity + 1;
        shoppingCart[_id] = newQuantity;
        // localStorage.setItem(_id, newQuantity);
    }else{
        shoppingCart[_id] = 1;
        // localStorage.setItem(_id,1)
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}
export { addTodb };

