import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import styled from "./Navbar.module.css";
import logo from "../../assets/img/logo-min.png";
import { Home, Store } from "lucide-react";
function Navbar() {
  // const [isClose, setIsClose] = useState(true);
  // const toggleNavbar = () => {
  //   setIsclose(!isClose);
  // };
  function handleClose(): void {
    const drawer = document.getElementById("drawer");
    if (drawer) {
      const computedStyle = window.getComputedStyle(drawer);
      const maxHeight = computedStyle.getPropertyValue("max-height");
      const currentMaxHeightPx = parseFloat(maxHeight || "0");
      console.log(currentMaxHeightPx);
      // Parse the numeric part of the string
      if (currentMaxHeightPx === 105.5) {
        drawer.style.maxHeight = "0px";
      } else {
        drawer.style.maxHeight = "105.5px";
      }
    }
  }
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility of the div
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the state
  };

  return (
    // notification navbar
    <div className="navbar">
      <div className={`${styled.notification} ${styled.drawer}`} id="drawer">
        <Container>
          <div className={styled.notificationNavbar}>
            <span
              onClick={handleClose}
              id="notification-box-1"
              className={styled.notification_box_close}
            ></span>
            <svg
              className="h-5 w-5 ml-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
            >
              <path
                fill="#FDD888"
                d="M33 31c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V14c0-2.2 1.8-4 4-4h22c2.2 0 4 1.8 4 4v17z"
              />
              <path
                fill="#FDD888"
                d="M36 11c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h28c2.2 0 4 1.8 4 4z"
              />
              <path fill="#FCAB40" d="M3 15h30v2H3z" />
              <path
                fill="#DA2F47"
                d="M19 3h-2c-1.657 0-3 1.343-3 3v29h8V6c0-1.656-1.343-3-3-3z"
              />
              <path
                fill="#DA2F47"
                d="M16 7c1.1 0 1.263-.516.361-1.147L9.639 1.147c-.902-.631-2.085-.366-2.631.589L4.992 5.264C4.446 6.219 4.9 7 6 7h10zm4 0c-1.1 0-1.263-.516-.361-1.147l6.723-4.706c.901-.631 2.085-.366 2.631.589l2.016 3.527C31.554 6.219 31.1 7 30 7H20z"
              />
            </svg>
            <p>
              جهت کسب امتیاز و برنده شدن جوایز فاصله چندانی ندارید ، با هر
              فعالیت امتیاز کسب کنید و شانس خود را افزایش دهید ، جهت اطلاعات
              بیشتر به بخش جوایز مراجعه نمایید.
            </p>
            <div className={styled.notification_box_button}>
              <a href="">جوایز</a>
            </div>
          </div>
        </Container>
      </div>
      {/* main navbar */}
      <div className={styled.main_navbar}>
        <ul className="flex">
          <li className="flex flex-row items-center justify-center">
            <Home size={18} />
            <Link to="/">خانه</Link>
          </li>
          <li className="flex flex-row items-center justify-center">
            <Store size={18} />
            <Link to="/store">فروشگاه</Link>
          </li>
          <li>
            <Link to="/">وبلاگ</Link>
          </li>
          <li>
            <Link to="/">ارتباط با ما</Link>
          </li>
          <li>
            <Link to="/">قوانین و مقررات</Link>
          </li>
          <li>
            <Link to="/">تخفیفات ویژه</Link>
          </li>
        </ul>
        <div className={styled.flex_justify_end}>
          <span>کاربر گرامی خوش آمدید</span>
          <a href="">ثبتنام</a>
          <span>/</span>
          <a href="">
            <svg
              className="inline"
              height="12pt"
              viewBox="0 0 512 512"
              width="12pt"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m375.023438 276h-355.023438c-11.046875 0-20-8.953125-20-20s8.953125-20 20-20h355.023438l-72.09375-85.070312c-7.140626-8.425782-6.097657-21.046876 2.328124-28.1875 8.425782-7.140626 21.046876-6.097657 28.1875 2.328124l100 118c6.304688 7.433594 6.292969 18.441407 0 25.859376l-100 118c-7.113281 8.394531-19.730468 9.496093-28.1875 2.328124-8.425781-7.140624-9.46875-19.761718-2.328124-28.1875zm116.976562-276h-173.8125c-11.042969 0-20 8.953125-20 20s8.957031 20 20 20h153.8125v432h-153.8125c-11.042969 0-20 8.953125-20 20s8.957031 20 20 20h173.8125c11.046875 0 20-8.953125 20-20v-472c0-11.046875-8.953125-20-20-20zm0 0"></path>
            </svg>
            <a href="">وارد شوید</a>
          </a>
        </div>
      </div>
      {/* bottom header */}
      <Container>
        <div className="flex items-center justify-between">
          <div className={styled.bottom_header}>
            <img src={logo} alt="" />
          </div>
          <form className={styled.search_form} action="">
            <div onClick={toggleVisibility} className={styled.select}>
              <span>دسته بندی</span>
            </div>
            <div className={styled.search_header}>
              <span>اسم بازی مورد نظر را تایپ کنید</span>
            </div>
            {isVisible && (
              <span className={styled.selctDropdown}>
                <input type={"search"} />
                <span className={styled.selectResult}>
                  <ul>
                    <li className={styled.selected}>دسته بندی</li>
                    <li>دسته بندی</li>
                    <li>دسته بندی</li>
                    <li>دسته بندی</li>
                    <li>دسته بندی</li>
                    <li>دسته بندی</li>
                    <li>دسته بندی</li>
                  </ul>
                </span>
              </span>
            )}
          </form>
          <div className={styled.favoriteCart}>
            <div>
              <div className={styled.favorit}>
                <span>0</span>
                <svg width="50" height="50" viewBox="0 0 45.781 46">
                  <defs>
                    <style>
                      {`
           .cls_1 {
              fill: none;
              stroke: #c8cae4;
              stroke-width: 6px;
              stroke-dasharray: 0.6 4.2 0.6 4.2;
              fill-rule: evenodd;
            }
          `}
                    </style>
                  </defs>
                  <path
                    id="Rounded_Rectangle_3_copy_2"
                    data-name="Rounded Rectangle 3 copy 2"
                    className="cls_1"
                    d="M277,84a20,20,0,1,1-20,20A20,20,0,0,1,277,84Z"
                    transform="translate(-254.094 -81)"
                  />
                  <image
                    id="_087-heart"
                    data-name="087-heart"
                    x="13.906"
                    y="14"
                    width="18"
                    height="17"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAYAAADBa/A+AAAD8ElEQVRYhcWYeYhVdRTHP/PSUpDxD5skHVRygYJEFBNUyjQrFRcKFNNUJM0EbSElSXIHDQ1L7K9cUBA016yRLBQ3TP1L1EAyF3BpZILUxJjBMc74vXLe7771OvPmA8O8e975nfN99/6Wc27ZnHlbyEF/YDTQF3gWSAE3gdPAj8AvwP3swxv8XwNGAL2A9kA9cAM4BewGfouNEtnEDQRWA31i36TzJzAP+D72DbwNrAC6xr5J5wQwBziS6ZeliQWWyDGfMJR4G7AZeEq2J4FNwPYChBn9gMPAUuV/RIvAcS3wQWCzx3AMuADUAc/pzrZyPhOBjpoCu4AhQYz/gKPAReXsDgwIbs7nQDuf34v7JBBmQr4BlgM1QbI2wEwFLJftVeCSEkTcBpYB3wL/BjHM7zNgtu62MQP4A/gKN+d6AGecU40m8UlyY3dxf5bHZ/Pxdd2tXNhiqwKelk8t0BM4H93WpU5YbYHCUOJBwOXAfkX2fMLQqh2uvEiHzfuGZ94BeMs5f1mgsIirwFCgWtc3tX1cjXlm55TyRpieDiZuDPCEjDYvVmUNkZ0LWt3TgN66LhbLe0djTM+YlFZNhG2q/yQIbFwDvtP/JFjeX924ASkt64ijCQM3Fj5/dxNX4Qw3mlncdfe5IhWcjeGmXGp8/vspt8qMTs0srrP7XG3ifneG8NgpNYNdvnMm7pAzvAx0ayZhlvcVd33YxO0F7spg+8vC2LDSMN/tt6bnBxN3S/tTxAT9lZJ3gMkun+m5HZ2tS4LKYwPwZonEvQFsdNc1/mw1/pbyel23BHYGp0dT0F/1X0vFtvxTpCet2KtSbRXRWraeTSTsRWCf8kR8BPwUXYRlulXCC9x1uc67xl7B3RS33NlsIa7xTqE4Y7Gam4gKBaqMeSajUgXGM27018CiMFomcahk95O0syreiphncdj4n4EubpQ1Qx9nipJN3APgPfWVEc9rPrRNKKxcve4LzrYHmKp8MbKJQwXBOOCAs/XV6mod885NK/3Ql5zXQWBsrqY8lzhU148Oynbrsra63Twf5rdV4yJOKm5trrH5xKHS3RqQs842UnOyLOadTpk29FHOek4N1J2YdwJxaFMcFnRTE7XKcmGr/l33/SWdPGEfnJFCxaFuyo6av5xtVqYtQCwMNvVq9bEFd2XFiENdlSXwTdAXwIeB3+xgM7+l9rGorqxYcejNgD2ae8622lUVk4LHfU9T4kwsUh6SiDNOaLXVOdt6vfLa4Gx16ouPxyI0oTh0BI13lYzFmuti1qtO2x8bWQJxxg5gesz6kPf1ji4xjyvOWAd8GtjsTaWvrhPRWH1q9H7FFoUd5CsfOyLwPxw/yQddCpHBAAAAAElFTkSuQmCC"
                  />
                </svg>
              </div>
            </div>
            <div className={styled.basket}>
              <i className={styled.fa_basket}></i>
              <span>سبد خرید</span>
              <span>0</span>
            </div>
          </div>
        </div>
        <div className={styled.mainMenu}>
          <ul className="flex items-center">
            <li>
              <span>بازی اورجینال PC</span>
              <i></i>
              <ul className={styled.subMenu}>
                <li>
                  <a href="#">Steam</a>
                </li>
                <li>
                  <a href="#">Origin</a>
                </li>
                <li>
                  <a href="#">Uplay</a>
                </li>
                <li>
                  <a href="">Battle-Net</a>
                </li>
                <li>
                  <a href="">Epic Games</a>
                </li>
                <li>
                  <a href="">Store Win 10/11</a>
                </li>
                <li>
                  <a href="">کنسول </a>
                </li>
                <li>
                  <a href="">Mobile </a>
                </li>
              </ul>
            </li>
            <li>
              <svg
                className="nav-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="11pt"
                height="11pt"
                viewBox="0 0 372.36823 372.57281"
              >
                <g id="g4146" transform="translate(-1.5706619,12.357467)">
                  <path
                    style={{ fill: "#000000" }}
                    d="M 169.18811,359.44924 C 140.50497,356.70211 111.4651,346.40125 86.518706,330.1252 65.614374,316.48637 60.893704,310.87967 60.893704,299.69061 c 0,-22.47524 24.711915,-61.84014 66.992496,-106.71584 24.01246,-25.48631 57.46022,-55.36001 61.0775,-54.55105 7.0309,1.57238 63.25048,56.41053 84.29655,82.2252 33.28077,40.82148 48.58095,74.24535 40.808,89.14682 -5.9087,11.32753 -42.57224,33.4669 -69.50775,41.97242 -22.19984,7.01011 -51.35538,9.9813 -75.37239,7.68108 z M 32.660004,276.3228 C 15.288964,249.67326 6.5125436,223.43712 2.2752336,185.49086 c -1.39917002,-12.53 -0.89778,-19.69701 3.17715,-45.41515 5.0788204,-32.05404 23.3330104,-69.136381 45.2671304,-91.957616 9.34191,-9.719732 10.17624,-9.956543 21.56341,-6.120482 13.828357,4.658436 28.595936,14.857457 51.498366,35.56661 l 13.36254,12.082873 -7.2969,8.96431 C 95.97448,140.22403 60.217254,199.2085 46.741444,235.70071 c -7.32599,19.83862 -10.28084,39.75281 -7.12868,48.04363 2.12818,5.59752 0.17339,3.51093 -6.95276,-7.42154 z m 304.915426,4.53255 c 1.71605,-8.37719 -0.4544,-23.76257 -5.5413,-39.28002 -11.01667,-33.60598 -47.83964,-96.12421 -81.65282,-138.63054 L 239.73699,89.563875 251.25285,78.989784 c 15.03631,-13.806637 25.47602,-22.073835 36.74025,-29.094513 8.88881,-5.540156 21.59109,-10.444558 27.05113,-10.444558 3.36626,0 15.21723,12.298726 24.78421,25.720611 14.81725,20.787711 25.71782,45.986976 31.24045,72.219686 3.56833,16.9498 3.8657,53.23126 0.57486,70.13935 -2.70068,13.87582 -8.40314,31.87484 -13.9661,44.08195 -4.16823,9.14657 -14.53521,26.91044 -19.0783,32.69074 -2.33569,2.97175 -2.33761,2.96527 -1.02393,-3.4477 z M 172.25917,33.104812 c -15.60147,-7.922671 -39.6696,-16.427164 -52.96493,-18.715209 -4.66097,-0.802124 -12.61193,-1.249474 -17.6688,-0.994114 -10.969613,0.55394 -10.479662,-0.0197 7.11783,-8.3336652 14.63023,-6.912081 26.83386,-10.976696 43.40044,-14.455218 18.6362,-3.9130858 53.66559,-3.9590088 72.00507,-0.0944 19.80818,4.174105 43.13297,12.854085 56.27623,20.9423862 l 3.90633,2.403927 -8.96247,-0.452584 c -17.81002,-0.899366 -43.76575,6.295879 -71.63269,19.857459 -8.40538,4.090523 -15.71788,7.357511 -16.25,7.25997 -0.53211,-0.09754 -7.38426,-3.43589 -15.22701,-7.418555 z"
                    id="path4148"
                  ></path>
                </g>
              </svg>
              <span>XBOX</span>
              <i></i>
            </li>
            <li>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="18pt"
                height="18pt"
                viewBox="0 0 106.726 106.726"
              >
                <linearGradient id="svgpink-gradient">
                  <stop offset="30%" stop-color="#000"></stop>
                  <stop offset="70%" stop-color="#000"></stop>
                </linearGradient>
                <g>
                  <path
                    d="M11.703,67.563l-3.6,1.4c-5.4,2.3-8.2,4.7-8.1,6.8c0.3,3.1,3.8,5.4,10.2,7.1
                      c8.3,2.2,16.7,2.7,25.4,1.4v-8.7l0,0l-6.9,2.6c-7.2,2.5-10.9,0.4-10.9,0.4c-1.1-0.7-1.6-2.4,1.4-3.5l3.8-1.4l12.6-4.5v-10.1
                      l-3.2,1.1L11.703,67.563z"
                  ></path>
                  <path
                    d="M64.303,32.463v25.9c5.4,2.6,10.2,2.8,13.8,0.1c3.7-2.6,5.7-7.1,5.7-13.9c0-7.1-1.4-12.5-4.5-16.1
                      c-2.8-3.8-7.8-7-15.2-9.5c-9.2-3-17-5.6-23.2-6.9v77.5l16.7,5.1v-64.4C57.503,26.363,64.303,26.663,64.303,32.463z"
                  ></path>
                  <path
                    d="M106.703,72.463c-0.1-2.7-3.3-4.8-9-6.7c-6.4-2.1-11.9-3.1-17.9-2.9c-5.5,0.1-12.1,1.9-18,3.8v9.9
                      l16.2-5.7c0,0,4.9-1.8,9.1-0.7c3.2,0.8,3,2.6-0.2,3.7l-3.7,1.5l-21.4,7.7v10.1l10-3.6l24-8.5l2.8-1.3
                      C104.403,77.663,107.003,75.363,106.703,72.463z"
                  ></path>
                </g>
              </svg>
              <span>PlayStation</span>
              <i></i>
            </li>
            <li>
              <span>سی دی کی اشتراکی</span>
              <i></i>
            </li>
            <li>
              <span>گیفت کارت</span>
              <i></i>
            </li>
            <li>
              <span>کردیت-points</span>
              <i></i>
            </li>
            <li>
              <span>اشتراک آنلاین</span>
              <i></i>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <span>تخفیفات ویژه</span>
              <i></i>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f8705b"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-gift"
              >
                <polyline points="20 12 20 22 4 22 4 12"></polyline>
                <rect x="2" y="7" width="20" height="5"></rect>
                <line x1="12" y1="22" x2="12" y2="7"></line>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
              </svg>
              <span>جوایز</span>
              <i></i>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
