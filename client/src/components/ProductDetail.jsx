import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ products }) {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.rating}</p>
            <p>{product.discount}</p>
            <p>{product.availability}</p>
        </div>
    );
}
export default ProductDetail;