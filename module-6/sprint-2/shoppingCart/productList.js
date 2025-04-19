

const ProductList = () => {
    const [products, setProducts] = React.useState([]);
    const dispatch = ReactRedux.useDispatch();

    React.useEffect(() => {
        fetchData().then((data) => setProducts(data)).catch((error) => console.log(error));
    }, [])
    console.log(products);
  return (
    <div className = 'products'>
            {
                products?.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.tittle} style={{width : '100px', height : "100px", objectFit : "cover"}} />
                        <div>
                            <h3>{product.title}</h3>
                            <p>{product.price}</p>
                        </div>

                        <button onClick ={() => dispatch(addItems(product))}>Add to Cart</button>
                    </div>
                ))
            }        
    </div>
  )
}
