import { Link } from "react-router-dom";
import Cartitem from "../../components/cartitem/Cartitem";
import { useShoppingcartcontext } from "../../context/Shoppingcartcontext";

function Cart() {
  const { cartitems } = useShoppingcartcontext();

  return (
    <>
      {cartitems.length > 0 ? (
        cartitems.map((item) => <Cartitem key={item.id} {...item} />)
      ) : (
        <div className="bg-gray-50 p-16">
          <div className="shadow rounded-3xl mr-11 ml-11 p-16 bg-white">
            <p>سبد خرید شما خالی است.</p>
            <Link to="/store">
              {" "}
              <span>بازگشت به فروشگاه</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
