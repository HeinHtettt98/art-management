import { toWatchCategory } from "../app/categoryRender";
import { DrawItemDivHandelar } from "../app/drawerPart";
import { addCartHandelar, inputHandelar } from "../app/handelar";
import { drawerItemBox, productCointainer, schowCategoryBtn, searchInput } from "./selector";

const addEventListenerr = () => {
  searchInput.addEventListener("keyup",inputHandelar)
  schowCategoryBtn.addEventListener("click",toWatchCategory)
  productCointainer.addEventListener("click",addCartHandelar)
  drawerItemBox.addEventListener("click",DrawItemDivHandelar)
}
export default addEventListenerr;