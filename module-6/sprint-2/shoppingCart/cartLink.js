

const CartLink = () => {
    const cart = ReactRedux.useSelector(state => state.cart)
    const [showCart, setShowCart] = React.useState(false);

    return (
        <div className = "cart-link-wrapper">
            <button className="cart-link" onClick ={() => setShowCart(!showCart)}>
            🛒 Cart ({cart.items.length})
            </button>

            {showCart && (
                <div className='cart-dropdown'>
                    <Cart />
                </div>
            )}
        </div>
    )
}