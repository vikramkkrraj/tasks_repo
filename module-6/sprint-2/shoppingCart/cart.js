const Cart = () => {
  const cart = ReactRedux.useSelector((state) => state.cart);
  const dispatch = ReactRedux.useDispatch();

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.items.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/100x100?text=No+Image";
                  }}
                />
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.title}</h4>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="cart-item-quantity">
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        dispatch(decQuantity(item.id))
                      }
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        dispatch(incQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch(removeItems(item.id))
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <span>Total:</span>
            <span>${cart.total}</span>
          </div>
        </>
      )}
    </div>
  );
};

window.Cart = Cart;
