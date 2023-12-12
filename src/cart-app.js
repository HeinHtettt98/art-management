import { products } from "./core/data";
import initialRender from "./core/intitalRender";
import addEventListenerr from "./core/listener";

class CartApp {
    init() {
        // console.dir(products);
     initialRender();
     addEventListenerr();
    }
}
export default CartApp;