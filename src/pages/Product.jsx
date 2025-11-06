import React, { useEffect, useState } from 'react';

const Product = () => {
    const [products , setProducts] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(null);

    useEffect(()=>{
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
              
    },[])
    return (
        <div>
            <h2> All Products</h2>

            {isLoading && <p>Products are loading...</p>}

            <section>
                {products && products.length>0 && products.map((product)=> {
                    const { id , title , category ,price, description} = product;
                    return  (
                        <article className='border rounded-2xl p-4 my-4 border-r-gray-500 font-semibold  ' key={product.id}>

                            <h2 className='text-red-500'>{title}</h2>
                            <h2>Catagory: {category}</h2>
                            <h2>Price: {price}</h2>
                            <h2>{description && description.substring(0,100)}...</h2>

                        </article>
                    );
                })}
            </section>
            
        </div>
    );
};

export default Product;