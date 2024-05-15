import { useState } from "react";
import Container from "../container/Container";
import styled from "./Navbar.module.css";

function Navbar() {
  // const [isClose, setIsClose] = useState(true); 
  // const toggleNavbar = () => {
  //   setIsclose(!isClose); 
  // };
  function handleClose(): void {
    const drawer = document.getElementById('drawer');
    if (drawer) {
      const currentMaxHeightPx = parseFloat(drawer.style.maxHeight || '0'); // Parse the numeric part of the string
      if (currentMaxHeightPx === 105.5) {
        drawer.style.maxHeight = "0px";
      } else {
        drawer.style.maxHeight = "105.5px";
      }
    }
  }
  return (
    // notification navbar
    <div className="navbar">
    <div className={`${styled.notification} `} id="drawer">
      <Container>
        <div className={styled.notificationNavbar} >
          <span onClick={handleClose}
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
            .جهت کسب امتیاز و برنده شدن جوایز فاصله چندانی ندارید ، با هر فعالیت
            امتیاز کسب کنید و شانس خود را افزایش دهید ، جهت اطلاعات بیشتر به بخش
            جوایز مراجعه نمایید
          </p>
          <div className={styled.notification_box_button}>
            <a href="">جوایز</a>
          </div>
        </div>
      </Container>
    </div>
    </div>
  );
}

export default Navbar;
