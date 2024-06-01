import React, { useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import Product from '../models/Product';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [company, setCompany] = useState('AMZ');
    const [category, setCategory] = useState('Laptop');
    const [top, setTop] = useState(10);
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(10000);

    useEffect(() => {
        const fetchData = async () => {
            const data = await ProductService.getProducts(company, category, top, minPrice, maxPrice);
            const products = data.map((item, index) => new Product(index, item.productName, item.price, item.rating, item.discount, item.availability));
            setProducts(products);
        };
        fetchData();
    }, [company, category, top, minPrice, maxPrice]);

    return (
        <div>
            <form>
                <div>Select Company</div>
                <select value={company} onChange={(e) => setCompany(e.target.value)}>
                    <option value="AMZ">AMZ</option>
                    <option value="FLP">FLP</option>
                    <option value="SNP">SNP</option>
                    <option value="MY">MY</option>
                    <option value="AZO">AZO</option>
                </select>
                <div>Select Category</div>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Laptop">Laptop</option>
                    <option value="Phone">Phone</option>
                    <option value="Computer">Computer</option>
                    <option value="TV">TV</option>
                    <option value="Earphone">Earphone</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Charger">Charger</option>
                    <option value="Mouse">Mouse</option>
                    <option value="Keypad">Keypad</option>
                    <option value="Bluetooth">Bluetooth</option>
                    <option value="Pendrive">Pendrive</option>
                    <option value="Remote">Remote</option>
                    <option value="Speaker">Speaker</option>
                    <option value="Headset">Headset</option>
                    <option value="PC">PC</option>

                </select>
                <div>Enter number of products to be displayed</div>
                <input type="number" value={top} onChange={(e) => setTop(e.target.value)} />
                <div>Enter price range</div>
                <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            </form>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                    <p>{product.rating}</p>
                    <p>{product.discount}</p>
                    <p>{product.availability}</p>
                </div>
            ))}
        </div>
    );
}
export default ProductList;