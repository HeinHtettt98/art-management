import { products } from "../core/data";
import { app, countBtm } from "../core/selector";
import { addItemToDrawer } from "./drawerPart";
import { productHandelar } from "./productUi";

export const inputHandelar = (event) => {
  // productCointainer.innerHTML = "";
  // console.log(search);
  productHandelar(
    products.filter((prod) =>
      prod.title.toLowerCase().includes(event.target.value)
    )
  );
};

export const addCartOrDoneHandler = (btm) => {
  if (btm.innerText === "Add to cart") {
    btm.textContent = "Done";
    // document.querySelector("");
  } else {
    btm.textContent = "Add to cart";
  }
};
export const addCartHandelar = (event) => {
  if (event.target.classList.contains("addToCartBtn")) {
    // ADD TO DRWER ITEMS
    const closestDiv = event.target.closest(".yee");
    const productId = closestDiv.getAttribute("id");
    const addCartButtom = event.target;
    const btmText = addCartButtom.querySelector("#addCartBtnText");
    addCartOrDoneHandler(btmText);
    // START ANIMATION
    const imageLocation = closestDiv
      .querySelector(".product-img")
      .getBoundingClientRect();
    const coubtBtnLocation = countBtm.getBoundingClientRect();
    const newImage = closestDiv.querySelector(".product-img").cloneNode(true);
    newImage.classList.remove("top-[-64px]", "absolute");
    newImage.classList.add("fixed", "z-50");

    newImage.style.top = imageLocation.top + "px";
    newImage.style.left = imageLocation.left + "px";
    app.append(newImage);

    const animateKeyFrame = [
      {
        top: imageLocation.top + "px",
        left: imageLocation.left + "px",
      },
      {
        top: coubtBtnLocation.top + "px",
        left: coubtBtnLocation.left + "px",
        height: "15px",
        rotate: "2turn",
      },
    ];
    const animateTemline = {
      duration: 500,
      iterations: 1,
    };
    const imageAnimation = newImage.animate(animateKeyFrame, animateTemline);
    imageAnimation.addEventListener("finish", () => {
      newImage.remove();
      addItemToDrawer(productId);
      countBtm.classList.add("animate__animated", "animate__wobble");
      countBtm.addEventListener("animationend", () => {
        countBtm.classList.remove("animate__wobble");
      });
    });
    addCartButtom.disabled = true;
  }
};
