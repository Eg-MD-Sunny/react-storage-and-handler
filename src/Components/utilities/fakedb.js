//Use Local storage to manage cart data
const addTodb = _id =>{
    const quantity = localStorage.getItem(_id);
    if(quantity){
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(_id, newQuantity);
    }else{
        localStorage.setItem(_id,1)
    }
}
export { addTodb };

