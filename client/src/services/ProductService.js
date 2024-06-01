import axios from 'axios';

class ProductService {
    static async getProducts(company, category, top, minPrice, maxPrice) {
        let token = localStorage.getItem("token");
        const response = await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    }
}
export default ProductService;