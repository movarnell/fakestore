// define the API endpoint URL
const ApiEndpoint = "https://6430c3a8d4518cfb0e54dd3f.mockapi.io/store/orders";

// define an asynchronous function to remove an order from the API by index
const RemoveOrder = async (index) => {
  // use fetch to send a DELETE request to the specified endpoint URL
  const response = await fetch(`${ApiEndpoint}/${index}`, {
    method: "DELETE",
  });
  // convert the response to JSON format
  const data = await response.json();
  // return the data
  return data;
}

// export the RemoveOrder function for use in other modules
export default RemoveOrder;
