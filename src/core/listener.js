import { inputHandelar } from "../app/handelar";
import { searchInput } from "./selector";

const addEventListenerr = () => {
  searchInput.addEventListener("keyup",inputHandelar)
}
export default addEventListenerr;