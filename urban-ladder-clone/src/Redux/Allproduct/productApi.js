import axios from "axios";
import { product_failure, product_request, product_success } from "./product.action";

export const allProductApi = (params,sort)=>(dispatch)=>{
    
  

   
dispatch(product_request())
//https://urbanladderclone.herokuapp.com/api/products   res.data.products   ?&sort=${params}
axios
.get(!params ?`https://urbanladderclone.herokuapp.com/api/products` :`https://urbanladderclone.herokuapp.com/api/products${params}&sort=${sort}`)
.then((res)=>{

 console.log(res)
    dispatch(product_success(res.data.products))

})
.catch((res)=>{
    dispatch(product_failure())
})
}
