export const getCard = ()=>{


    return new Promise((req,res)=>{
        const cart=window.localStorage.getItem('cart');
        
        req(cart);
    })
   
    
}

export const storeCard = (cart)=>{
    window.localStorage.setItem('cart',JSON.stringify(cart));


}