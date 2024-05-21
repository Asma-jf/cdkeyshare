import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getsingleproduct } from "../../services/api";
import { products } from "../../types/servers";
import Container from "../../components/container/Container";

function Product() {
  const [product, setProduct] = useState<products>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    getsingleproduct(params.id as string).then((data) => {
      setProduct(data);
    });
  }, []);
  console.log(
    <img
      className="text-center"
      src={product?.image}
      alt="عکس نمایش داده نمیشود"
    />
  );

  return (
    <>
      <Container>
        <div>{product?.title}</div>
        <div>{product?.price}</div>
        <div>{product?.description}</div>
        <img
          className="h-6 w-7"
          src={product?.image}
          alt="عکس نمایش داده نمیشود"
        />
      </Container>
    </>
  );
}

export default Product;
