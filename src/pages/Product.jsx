import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Product = () => {
    const [products , setProducts] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [ error , setError] = useState(null);

    const fetchData = () => {

         setIsLoading(true);
        setError(null);
        fetch('https://dummyjson.com/products')
        .then((res)=>{
            if(!res.ok){
                throw new Error("Data could not be fetched");
                
            }
            return res.json()
    })
        .then((data)=>{
            setProducts(data.products);
            setIsLoading(false);
        }).catch((error)=>setError(error.message))
        .finally(()=>setIsLoading(false));

    }


    useEffect(()=>{
       fetchData();
              
    },[])


    return (
        <div>
            <h2> All Products</h2>

            {isLoading && <p>Products are loading...</p>}

            <section>
                {products && products.length>0 && products.map((product)=> {
                    const { id , title , category ,price, description} = product;
                    return  (
                        <article className='border rounded-2xl p-4 my-4 border-r-gray-500 font-semibold  ' key={id}>

                            <h2 className='text-red-500'>{title}</h2>
                            <p>Id: {id}</p>
                            <h2>Category: {category}</h2>
                            <h2>Price: {price}</h2>
                            <h2>{description && description.substring(0,100)}...</h2>

                        <Link to={'/product/${id}'}  state={product}> Show Detels</Link>
                        </article>
                    );
                })}
            </section>
            
        </div>
    );
};

export default Product;