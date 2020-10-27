import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { tangGiamSoLuongBurgerAction } from "../redux/actions/BaiTapBurgerAction";

export default function Menu(props) {
  let { menu, burger, total } = useSelector(
    (state) => state.StateBaiTapBurgerReducer
  );
  let dispatch = useDispatch();
  // console.log(menu);
  const renderDanhSachThucAn = () => {
    let content = [];
    for (const key in menu) {
      content.push([key, menu[key]]);
    }

    return content.map(([nameMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{nameMenu}</td>
          <td>
            <button
              className="btn btn-success mr-2"
              onClick={() => {
                dispatch(tangGiamSoLuongBurgerAction(nameMenu, 1));
              }}
            >
              +
            </button>
            {burger[nameMenu]}
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(tangGiamSoLuongBurgerAction(nameMenu, -1));
              }}
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{price * burger[nameMenu]}</td>
        </tr>
      );
    });
  };
  return (
    <>
      <div>
        <h1>Chọn thức ăn</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Thức ăn</th>
              <th scope="col" />
              <th scope="col">Giá</th>
              <th scope="col">Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {renderDanhSachThucAn()}
            <tr>
              <td />
              <td />
              <td></td>
              <td>
                <span className="text-primary">Tổng tiền {total}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
