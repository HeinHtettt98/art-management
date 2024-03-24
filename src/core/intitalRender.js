import { categoryRender } from "../app/categoryRender";
import { productHandelar } from "../app/productUi";
import { categories, products } from "./data";

const initialRender = () => {
   productHandelar(products);
   categoryRender(categories)
}

export default initialRender;