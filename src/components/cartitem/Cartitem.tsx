import { useEffect, useState } from "react";
import { useShoppingcartcontext } from "../../context/Shoppingcartcontext";
import { products } from "../../types/servers";
import { getsingleproduct } from "../../services/api";
import { Trash2 } from "lucide-react";

interface icartitem {
  id: number;
  qty: number;
}
function Cartitem({ id, qty }: icartitem) {
  const {
    handleIncreaseProductqty,
    handleDecreaseproductqty,
    handleromoveproduct,
  } = useShoppingcartcontext();
  const [product, setProduct] = useState<products>();
  useEffect(() => {
    getsingleproduct(id).then((data) => {
      setProduct(data);
    });
  }, []);
  return (
    <div>
      <div className="bg-gray-50 p-16">
        <div className="shadow rounded-3xl mr-11 ml-11 p-16 bg-white">
          <div className="rounded-xl border">
            <table className=" w-full ">
              <thead>
                <tr className="text-base border-b">
                  <td className="p-2 text-center">محصول</td>
                  <td className="p-2 text-center">تعداد</td>
                  <td className="p-2 text-center">قیمت</td>
                  <td className="p-2 text-center">حذف</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="flex items-center p-2 text-center">
                    <a href="">
                      <img
                        src={product?.image}
                        alt=""
                        className="size-28 rounded-2xl"
                      />
                    </a>
                    <span className="text-xs font-bold">{product?.title}</span>
                  </td>
                  <td className="p-2 text-center">
                    <div className="border rounded-2xl flex justify-between items-center p-3 m-3">
                      <button onClick={() => handleIncreaseProductqty(id, 1)}>
                        +{" "}
                      </button>

                      <button>{qty}</button>

                      <button onClick={() => handleDecreaseproductqty(id, 1)}>
                        -{" "}
                      </button>
                    </div>
                  </td>
                  <td className="p-2 text-center">
                    {" "}
                    <p>{product?.price}</p>
                  </td>
                  <td className="p-2 text-center">
                    <div className="flex justify-center items-center">
                      <Trash2
                        size={16}
                        color="#e00106"
                        onClick={() => handleromoveproduct(id)}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
