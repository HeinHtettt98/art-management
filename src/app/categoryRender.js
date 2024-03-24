import { categoryGroup } from "../core/selector";
import { productHandelar } from "./productUi";
import { categories, products } from "../core/data";

export const categoryRender = (categoriess) => {
  categoryGroup.innerHTML = "";
  let eachBtnWidth = 0;
  let timing = 200;
  categoriess.forEach((category, index) => {
    const categoryBtn = document.createElement("button");
    categoryBtn.classList.add("categoryBtm", "top-0", "-z-10", "opacity-0");
    categoryBtn.innerText = category;
    categoryBtn.type = "button";
    categoryGroup.append(categoryBtn);
    console.log();
    if (index > 0) {
      categoryBtn.style.left = eachBtnWidth + "px";
      categoryBtn.style.transitionDuration = timing + "ms";
    } else {
      categoryBtn.style.left = "0px";
      categoryBtn.style.transitionDuration = timing + "ms";
    }
    timing += 100;
    // console.log(screen.width > 600);
    if (screen.width > 600) {
      eachBtnWidth += categoryBtn.getBoundingClientRect().width + 8;
    } else {
      eachBtnWidth += categoryBtn.getBoundingClientRect().width - 1;
      // console.log("ok");
    }
  });
};

export const toWatchCategory = () => {
  // categoryGroup.classList.remove("hidden");
  const cateButtom = document.querySelectorAll(".categoryBtm");
  cateButtom.forEach((i) => {
    if (i.classList.contains("-z-10")) {
      i.classList.remove("-z-10", "opacity-0");
      i.classList.add("translate-y-16", "z-0", "opacity-100");
    } else {
      i.classList.add("-z-10", "opacity-0");
      i.classList.remove("translate-y-16", "z-0", "opacity-100");
      productHandelar(products);
    }
    i.addEventListener("click", () => {
     
      productHandelar(products.filter((prod) => prod.category == i.innerText));
    });
  });

};
window.onresize = () => {
  categoryRender(categories);
};
