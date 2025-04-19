
const fetchData = async () => {
    try {
        // Using the fake store API
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        // console.log(data);
        return data;

    } catch (error) {
        console.log(error);
    }
}

fetchData();