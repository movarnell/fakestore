

 const RemoveOrder = async (index) => {
        const response = await fetch(`https://6430c3a8d4518cfb0e54dd3f.mockapi.io/store/orders/${index}`, {
          method: "DELETE", 
        })
        const data = await response.json()
       
        return data
      }
      
      export default RemoveOrder;