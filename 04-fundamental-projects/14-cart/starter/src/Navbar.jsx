import { FaCartPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

import { useGlobalContext } from "./context";
const Navbar = () => {
  const { state } = useGlobalContext();
  const [qty, setQTY] = useState(0);

  useEffect(() => {
    let val = 0;

    state.cart.forEach((item) => {
      val += Number(item.amount);
    });

    setQTY(val);
  }, [state]);

  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{qty}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
