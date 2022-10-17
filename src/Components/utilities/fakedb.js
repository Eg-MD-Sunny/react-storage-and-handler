//Use Local storage to manage cart data
const addTodb = _id =>{
    const quantity = localStorage.getItem(_id);
    if(quantity){
        console.log('Already Exists')
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(_id, newQuantity);
    }else{
        console.log('New Item')
        localStorage.setItem(_id,1)
    }
}
export { addTodb };

