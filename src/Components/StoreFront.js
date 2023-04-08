import {useState, useEffect} from 'react';
import { API } from '../API/Api';
import ProductCards from './ProductCards'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'


export default function StoreFront(){
const [products, setProducts] = useState([]);



useEffect(() => {
    fetchProducts();
}, []);



const fetchProducts = async () => {const addProduct = await API.getProducts();
    console.log(addProduct);
    setProducts(addProduct);
    console.log(addProduct);
};

console.log(products);
return(
    <div className='container'>
        <ProductCards products={products} />
    </div>
)

}