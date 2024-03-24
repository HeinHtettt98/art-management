import { products } from "../core/data";
import {
  drawerCartTemplate,
  drawerItemBox,
  boughtItemCount,
  drawerItemLists,
  totalCount,
} from "../core/selector";
import Swal from "sweetalert2";
import { addCartOrDoneHandler } from "./handelar";

export const addItemToDrawer = (argId) => {
  const {
    id,
    title,
    image,
    price,
    rating: { rate, count },
  } = products.find((i) => argId == i.id);
  const addToDrawerDesign = drawerCartTemplate.content.cloneNode(true);
  addToDrawerDesign.querySelector(".cart-item").setAttribute("id", id);
  addToDrawerDesign.querySelector(".cart-item-img").src = image;
  addToDrawerDesign.querySelector(".cart-item-title").innerText = title;
  addToDrawerDesign.querySelector(".cart-item-cost").innerText = price;
  addToDrawerDesign.querySelector(".cart-item-price").innerText = price;

  totalCount.textContent = (parseInt(totalCount.innerText) + price).toFixed(2);
  drawerItemBox.append(addToDrawerDesign);
  // console.log(addToDrawerDesign);

  //CHOSEN ITEMS COUNT
  boughtItemCount.textContent = drawerItemBox.children.length;
  drawerItemLists.textContent = drawerItemBox.children.length;
};
const totalItemCost = () => {
  const itemsCost = drawerItemBox.querySelectorAll(".cart-item-cost");
  let x = 0;
  itemsCost.forEach((i) => {
    x += parseInt(i.innerText);
  });
  totalCount.textContent = x.toFixed(2);
};

export const DrawItemDivHandelar = (e) => {
  const increDecreaseDiv = e.target.closest(".cart-item");
  const itemPrice = increDecreaseDiv.querySelector(".cart-item-price");
  const totalPrice = increDecreaseDiv.querySelector(".cart-item-cost");
  const drawerQuantity = increDecreaseDiv.querySelector(".cart-item-quantity");
  if (e.target.classList.contains("cart-item-quantity-decrement")) {
    if (drawerQuantity.innerText > 1) {
      drawerQuantity.textContent = drawerQuantity.innerText - 1;
      totalPrice.textContent = (
        itemPrice.innerText * drawerQuantity.innerText
      ).toFixed(2);
      totalItemCost();
    }
  } else if (e.target.classList.contains("cart-item-quantity-increment")) {
    drawerQuantity.textContent = parseInt(drawerQuantity.innerText) + 1;
    totalPrice.textContent = (
      itemPrice.innerText * drawerQuantity.innerText
    ).toFixed(2);
    totalItemCost();
  } else if (e.target.classList.contains("cart-item-del")) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "text-white bg-textHeading font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600",
        cancelButton:
          "text-gray-700 border border-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const id = increDecreaseDiv.getAttribute("id");
          document.querySelectorAll(".add-or-done").forEach((div, index) => {
            if (id == index + 1) {
              addCartOrDoneHandler(div);
              div.closest(".addToCartBtn").disabled = false;
            }
          });
          increDecreaseDiv.remove();
          boughtItemCount.textContent = drawerItemBox.children.length;
          drawerItemLists.textContent = drawerItemBox.children.length;
          totalItemCost();
        }
      });
  }
};
