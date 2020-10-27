import React from "react";
import BurgerLayout from "./BurgerLayout";
import Menu from "./Menu";
import "./BaiTapBurger.css";

export default function BaiTapBurger() {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-7">
          <BurgerLayout></BurgerLayout>
        </div>
        <div className="col-md-5">
          <Menu></Menu>
        </div>
      </div>
    </div>
  );
}
