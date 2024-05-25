import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getsingleproduct } from "../../services/api";
import { products } from "../../types/servers";
import styled from "/src/pages/product/product.module.css";
import { ChevronLeft } from "lucide-react";
import TabsExample from "../../components/tab/TabExample";
import Slider from "/src/components/slider/Sliser.tsx";
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
      <div className={styled.section}>
        <div className={styled.sectionCover}></div>
        <div className={styled.boxnav}>
          <nav className="relative z-50 flex items-center">
            <a href="">خانه</a>
            <ChevronLeft size={16} />
            <a href="">فروشگاه</a>
            <ChevronLeft size={16} />
            <a className="font-bold" href="">
              خرید بازی اورجینال 2024 call of
            </a>
          </nav>
        </div>
        <div className="flex justify-center">
          <div className="flex w-3/4 justify-items-center bg-white z-50 p-10 rounded-r-3xl">
            <img
              className="block ml-10 h-full"
              src={product?.image}
              alt="عکس نمایش داده نمیشود"
            />
            <div className="ml-10">
              <div className={styled.title}>{product?.title}</div>
              <div className={styled.price}>قیمت: {product?.price}</div>
              <div className={styled.description}>{product?.description}</div>
              <div className="flex bg-slate-100 p-3 rounded-xl mt-4">
                <div className="flex items-center border-l-2 pl-2">
                  <span className={styled.checkboxPackage}>
                    <svg
                      height="19px"
                      viewBox="0 0 512 512"
                      width="19px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                    >
                      <path d="m467 211h-16v-15c0-108.074219-87.476562-196-195-196s-195 87.925781-195 196v15h-16c-24.8125 0-45 20.1875-45 45v90c0 24.8125 20.1875 45 45 45h18.578125c6.195313 17.460938 22.867187 30 42.421875 30 24.8125 0 45-20.1875 45-45v-150c0-24.8125-20.1875-45-45-45-5.085938 0-9.96875.859375-14.527344 2.421875 6.410156-85.679687 77.753906-153.421875 164.527344-153.421875s158.117188 67.742188 164.527344 153.421875c-4.558594-1.5625-9.441406-2.421875-14.527344-2.421875-24.8125 0-45 20.1875-45 45v150c0 24.8125 20.1875 45 45 45 5.257812 0 10.304688-.914062 15-2.578125v18.578125c0 8.269531-6.730469 15-15 15h-107.578125c-6.195313-17.460938-22.867187-30-42.421875-30-24.8125 0-45 20.1875-45 45s20.1875 45 45 45c19.554688 0 36.226562-12.539062 42.421875-30h107.578125c24.8125 0 45-20.1875 45-45v-46h16c24.8125 0 45-20.1875 45-45v-90c0-24.8125-20.1875-45-45-45zm-437 135v-90c0-8.269531 6.730469-15 15-15h16v120h-16c-8.269531 0-15-6.730469-15-15zm76-135c8.269531 0 15 6.730469 15 15v150c0 8.269531-6.730469 15-15 15s-15-6.730469-15-15v-150c0-8.269531 6.730469-15 15-15zm150 271c-8.269531 0-15-6.730469-15-15s6.730469-15 15-15 15 6.730469 15 15-6.730469 15-15 15zm150-91c-8.269531 0-15-6.730469-15-15v-150c0-8.269531 6.730469-15 15-15s15 6.730469 15 15v150c0 8.269531-6.730469 15-15 15zm76-45c0 8.269531-6.730469 15-15 15h-16v-120h16c8.269531 0 15 6.730469 15 15zm0 0"></path>
                    </svg>
                  </span>
                  <span className="block">
                    <div className="text-sm">پکیج پشتیبانی</div>
                    <div className="text-xs pt-2">
                      فعال سازی از طریق پشتیبانی و رفع خطاهای اجرایی (نصب بازی)
                      و راهنمایی لازم{" "}
                    </div>
                  </span>
                </div>
                <div className="mr-2">
                  <input type="checkbox" />
                  <span className="mr-1 text-sm">فعالسازی پشتیبانی</span>
                  <small>(25.000 هزارتومان) </small>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white z-50 py-10 px-0 rounded-3xl shadow-xl -mr-10">
            <div className="block text-center leading-3">
              <div className="flex justify-center">
                <img src="/src/assets/img/gift-box.png" alt="gift" />
                <span className="text-sm"> باخرید ایـن محصول</span>
              </div>
              <br />
              <div>
                <span className={styled.badgeScore}>100 امتیاز </span>
                <span className="text-sm">بدست می‌آورید</span>
              </div>
              <form className="border rounded-2xl my-8 mx-3 p-1 w-45" action="">
                <input placeholder="1" min={0} className="p-1" type="number" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styled.article}>
        <aside>
          <img src="/src/assets/img/banner5-1.png" alt="" />
          <img src="/src/assets/img/prize.png" alt="" />
        </aside>
        <TabsExample />
        <div className={styled.slider}>
          <div className={styled.title}>
            <img src="/src/assets/img/shuffle.png" alt="" />
            <span className="mr-7 ml-3">محصولات مرتبط</span>
            <span className={styled.line}></span>
            <span className="mr-4 text-gray-600">RELATED</span>
          </div>
          <Slider />
        </div>
      </div>
    </>
  );
}

export default Product;
