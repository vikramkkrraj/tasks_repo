const { Provider } = ReactRedux;

const App = () => {
  return (
    <>
      <div className="app-container">
        <header className='app-header'>
            <h1>Shopping Cart</h1>
            <div className='cart-link-container'>
                <Provider store={store} >
                    <CartLink />
                </Provider>
            </div>
        </header>
        <main>
            <Provider store={store} >
                <ProductList />
            </Provider>
        </main>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
