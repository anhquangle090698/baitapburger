import React from "react";
import { useSelector } from "react-redux";

export default function BurgerLayout(props) {
  let { burger } = useSelector((state) => state.StateBaiTapBurgerReducer);

  const renderBurgerLayout = () => {
    // console.log(Object.entries(burger)); biến từng thuộc tính và giá trị của đối tượng thành từng mảng trong mảng to
    return Object.entries(burger).map(([nameBurger, amount], index) => {
      let breadMid = [];
      for (let i = 0; i < amount; i++) {
        breadMid.push(<div key={i} className={nameBurger}></div>);
      }
      return breadMid;
    });
  };

  return (
    <>
      <h1 className="text-center">Cửa hàng burger cybersoft</h1>
      <div className="burger__content">
        <div className="breadTop"></div>
        {renderBurgerLayout()}
        <div className="breadBottom"></div>
      </div>
    </>
  );
}
