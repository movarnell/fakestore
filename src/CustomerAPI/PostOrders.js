
const ApiEndpoint = "https://6430c3a8d4518cfb0e54dd3f.mockapi.io/store/orders";

 const PostOrder = async (newOrder) => {
        const response = await fetch(ApiEndpoint, {
          method: "POST", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newOrder)
        })
        const data = await response.json()
        return data
      }
      
      export default PostOrder;