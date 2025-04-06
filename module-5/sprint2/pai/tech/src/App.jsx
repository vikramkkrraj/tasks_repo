import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [page, setPage] = useState(0);
  const [product, setProduct] = useState([]);
  const [search , setSearch] = useState("");

  useEffect( () => {
     
    setProduct(product.map(item => item.title.toLowerCase() == search.toLowerCase()))
  }, [search])

  const nextPage = () => {
    setPage(prev => prev +1);
  };
  const prevPage = () => {
    if(page ==0){
      setPage(0);
    }else {
      setPage(prev => prev -1)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("https://dummyjson.com/products");
      setProduct(await res.data.products.slice(page, page + 6));
      console.log(product);
    };
    fetchData();
  }, [page]);
  console.log(product);

  return (
    <>
      <div style={{marginBottom : "20px"}}>
        <label >Seach the Prouct {" "}
        <input type="text" value={search} onChange={(e) =>setSearch(e.target.value)}/>
        </label>
      </div>
      <div
        className="card"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        {product.map((product, i) => (
          <>
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "300px",
                backgroundColor: "gray",
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "!00%", overflow: "hidden" }}
              />
              <h2> {product.title}</h2>
              <h2>Price: {product.price}</h2>
              <h2>Rating : {product.rating}</h2>
            </div>
          </>
        ))}
      </div>
      <div>
        <button onClick={prevPage}>prev</button>
        <button onClick={nextPage}>next</button>
      </div>
    </>
  );
}

export default App;
