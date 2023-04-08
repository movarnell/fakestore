const ApiEndpoint = "https://6430c3a8d4518cfb0e54dd3f.mockapi.io/store/products";

class Products{

    getProducts = async () => {
        try {
            const resp = await fetch(ApiEndpoint);
            const data = await resp.json();
            console.log(data)
            return data;
        } catch (e) {
            console.log("Fetching the products failed", e);
        }
    };

}

export const API = new Products();