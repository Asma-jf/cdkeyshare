import { products } from "../../types/servers";
import styled from "../productitem/Productitem.module.css";
type tproductitem = products;

function ProductItem({ image, title, price, description }: tproductitem) {
  return (
    <div className={styled.cart}>
      <img src={image} alt="" />
      <div className={styled.box}>
        <a>{title}</a>
        <div className={styled.pricecart}>
          <span className={styled.price}>{price}</span>
          <span className={styled.priceunit}>T</span>
        </div>
      </div>
      <div>
        <p className={styled.description}>{description}</p>
      </div>
    </div>
  );
}

export default ProductItem;
