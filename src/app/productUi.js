import {
  diffcultPart,
  productCointainer,
  productTemplateC,
} from "../core/selector";

const ratingStarUi = (rate) => {
  const frgment = document.createDocumentFragment();
  for (let i = 0; i < 5; i++) {
    const starClone = diffcultPart.content.cloneNode(true);
    const fullStar = starClone.querySelector(".full-star");
    const outLineStar = starClone.querySelector(".outline-star");
    if (i < rate.toFixed(0)) {
      frgment.append(fullStar);
    } else {
      frgment.append(outLineStar);
    }
  }
  return frgment;
};

const productUi = ({
  id,
  title,
  description,
  image,
  price,
  rating: { rate, count },
}) => {
  const productTemplate = productTemplateC.content.cloneNode(true);
  productTemplate.querySelector(".product-heading").innerText = title;
  productTemplate.querySelector(".product-img").src = image;
  productTemplate.querySelector(".product-content").innerText = description;
  productTemplate.querySelector(".product-count").innerText = count;
  productTemplate.querySelector(".product-price").innerText = price;
  productTemplate.querySelector(".product-rate").innerText = rate;
  productTemplate.querySelector(".product-parent").id = id;
  productTemplate.querySelector(".product-parent").classList.add("yee");
  productTemplate.querySelector(".rating-star").append(ratingStarUi(rate));
  return productTemplate;
};

export const productHandelar = (lists) => {
  productCointainer.innerHTML = "";
  lists.forEach((list) => {
    productCointainer.append(productUi(list));
  });
};
