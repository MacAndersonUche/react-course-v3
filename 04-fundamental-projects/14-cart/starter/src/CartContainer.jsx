import CartItem from "./CartItem";
import { useGlobalContext } from "./context";
const CartContainer = () => {
  const { state, clearCart } = useGlobalContext();

  if (state.cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  let results = [];

  state.cart.forEach((cartItem) => {
    results.push(<CartItem key={cartItem.id} {...cartItem} />);
  });
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>{results}</div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>$10</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
