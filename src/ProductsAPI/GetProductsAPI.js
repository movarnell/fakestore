// Define the endpoint for the API to retrieve products
const ApiEndpoint = "https://6430c3a8d4518cfb0e54dd3f.mockapi.io/store/products";

// Define an async function that retrieves products from the API
export async function getProductsAPI() {
    try {
        // Make a GET request to the API endpoint
        const resp = await fetch(ApiEndpoint);

        // Parse the response as JSON
        const data = await resp.json();

        // Return the product data
        return data;
    } catch (e) {
        // Log an error message if the request fails
        console.log("Fetching the products failed", e);
    }
};
