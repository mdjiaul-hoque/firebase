import React from 'react';
import { useLocation } from 'react-router';

const ProductsDetels = () => {
    
        const {state} = useLocation();
        console.log(state);
        const { id , title , category ,price, description} = state;

    return (
        <div>
            <h2 className='my-3'>Product Detels</h2>
            {
                state
                ? 
                <article className='bg-black rounded-2xl p-5'>
                    <h2 className='text-red-500'>{title}</h2>
                            <p>Id: {id}</p>
                            <h2>Category: {category}</h2>
                            <h2>Price: {price}</h2>
                            <h2>{description && description.substring(0,100)}...</h2>
                </article>
                : 
                <p>Product not found</p>
            }

            
        </div>
    );
};

export default ProductsDetels;