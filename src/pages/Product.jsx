import React, { useEffect, useState } from 'react';

const Product = () => {
    const [products , setProducts] = useState([]);
    const [isLoading , setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);

        fetch('https://dummyjson.com/products').then((res)=>res.json()).then((data)=>{
            setProducts(data.products);
            setIsLoading(false);
        });
              
    },[])
    return (
        <div>
            <h2> All Products</h2>

            {isLoading && <p>Products are loading...</p>}

            <section>
                {products && products.length>0 && products.map((product)=> {
                    const { id , title , category ,price, description} = product;
                    return  (
                        <article className='border rounded-2xl p-4 my-4 bg-emerald-400 font-semibold text-black ' key={product.id}>

                            <h2 className='text-red-500'>{title}</h2>
                            <h2>Catagory:{category}</h2>
                            <h2>Price:{price}</h2>
                            <h2>{description && description.substring(0,100)}...</h2>

                        </article>
                    );
                })}
            </section>
            
        </div>
    );
};

export default Product;