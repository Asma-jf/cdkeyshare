import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getsingleproduct } from "../../services/api";
import { products } from "../../types/servers";

function Product() {
  const [product, setProduct] = useState<products>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    getsingleproduct(params.id as string).then((data) => {
      setProduct(data);
    });
  }, []);
  return (
    <>
      <div>{product?.title}</div>
      <div>{product?.price}</div>
      <div>{product?.description}</div>
      <div>{product?.image}</div>
    </>
  );
}

export default Product;
