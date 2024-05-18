import { ChevronLeft, Search } from "lucide-react";
import Container from "../../components/container/Container";
import styled from "./Store.module.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { Link } from "react-router-dom";
import { products } from "../../types/servers";
import Productitem from "../../components/productitem/Productitem";

function Store() {
  const [products, setProducts] = useState<products[]>([]);
  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);
  return (
    <div>
      <div className={styled.storepage}>
        <Container>
          <h1 className={styled.title1}>آرشیو محصولات استیم</h1>
          <nav className="flex items-center py-2 mt-2 px-0">
            <a href="">خانه</a>
            <ChevronLeft size={16} />
            <a href="">فروشگاه</a>
          </nav>
          <form className={styled.searchForm} method="get">
            <input
              type="text"
              name="s"
              className=""
              placeholder="جستجو کنید..."
            />
            <button type="submit">
              <Search size={16} color="#ff0000" />
            </button>
          </form>
          <div className="grid grid-cols-12 mt-10">
            <aside className="col-span-4">
              <h4 className="text-center">
                <span className="text-center">پلتفرم ها</span>
                <div className={styled.cont1}>
                  <ul className="grid grid-cols-2 mt-5 bg-white rounded-2xl">
                    <li className="grid col-span-1 py-3">
                      <img
                        className="text-center inline"
                        src="src\assets\img\ball.png"
                        alt=""
                      />
                      <b className="w-full">XBOX</b>
                      <span className="block">xbox</span>
                    </li>
                    <li className=" grid col-span-1 py-3">
                      <img
                        className="text-center inline"
                        src="src\assets\img\ball.png"
                        alt=""
                      />
                      <b className="block">XBOX</b>
                      <span className="block">xbox</span>
                    </li>
                  </ul>
                  <ul className="grid grid-cols-2 bg-white rounded-2xl">
                    <li className="grid col-span-1 py-3">
                      <img
                        className="text-center inline"
                        src="src\assets\img\ball.png"
                        alt=""
                      />
                      <b className="w-full">XBOX</b>
                      <span className="block">xbox</span>
                    </li>
                    <li className=" grid col-span-1 py-3">
                      <img
                        className="text-center inline"
                        src="src\assets\img\ball.png"
                        alt=""
                      />
                      <b className="block">XBOX</b>
                      <span className="block">xbox</span>
                    </li>
                  </ul>
                  <ul className="grid grid-cols-2 bg-white rounded-2xl">
                    <li className="grid col-span-1 py-3">
                      <img
                        className="text-center inline"
                        src="src\assets\img\ball.png"
                        alt=""
                      />
                      <b className="w-full">XBOX</b>
                      <span className="block">xbox</span>
                    </li>
                    <li className=" grid col-span-1 py-3">
                      <img
                        className="text-center inline"
                        src="src\assets\img\ball.png"
                        alt=""
                      />
                      <b className="block">XBOX</b>
                      <span className="block">xbox</span>
                    </li>
                  </ul>
                  <ul className="grid grid-cols-2 bg-white rounded-2xl">
                    <li className="grid col-span-1 py-3">
                      <img
                        className="text-center inline"
                        src="src\assets\img\ball.png"
                        alt=""
                      />
                      <b className="w-full">XBOX</b>
                      <span className="block">xbox</span>
                    </li>
                    <li className=" grid col-span-1 py-3">
                      <img
                        className="text-center inline"
                        src="src\assets\img\ball.png"
                        alt=""
                      />
                      <b className="block">XBOX</b>
                      <span className="block">xbox</span>
                    </li>
                  </ul>
                </div>
              </h4>
              <div className="banners text-center divcont">
                <img src="src\assets\img\prize.png" alt="" />
                <img src="src\assets\img\banner5-1.png" alt="" />
              </div>
            </aside>
            <div className="col-span-8 bg-slate-400">
              <div className="grid grid-cols-4 gap-4">
                {products.map((item) => (
                  <Link to={`/products/${item.id}`}>
                    <Productitem {...item} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Store;
