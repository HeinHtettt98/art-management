import { products } from "../core/data"
import { productHandelar } from "./productUi"

export const inputHandelar = (event) => {
    productCointainer.innerHTML="";
    console.log(event.target.value);
    // console.log(search);
  productHandelar(products.filter((prod) => prod.title.toLowerCase().includes(event.target.value)))
}