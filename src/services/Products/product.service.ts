import axiosAuth from '@/lib/axios';
import Product from '@/models/product.model';

const ProductService = {

    // all products
    getProducts: async (limit?: number): Promise<any> => {
        try {
            let limit$ = 0
            if (limit !== undefined) {
                limit$ = limit
            }

            const response = await axiosAuth.get<any>(`/products?limit=${limit$}`)
            return response.data
        } catch (error) {
            throw error;
        }
    },

    // product detail
    getOneProduct: async (id: number): Promise<any> => {
        try {
            const response = await axiosAuth.get<any>(`/products/${id}`)
            return response.data
        } catch (error) {
            throw error;
        }
    },

    // product by category
    getProductsByCategory: async (category: string, limit?: number): Promise<any> => {
        try {

            let limit$ = 0
            if (limit !== undefined) {
                limit$ = limit
            }
            const response = await axiosAuth.get<any>(`/products/category/${category}?limit=${limit$}`)
            return response.data
        } catch (error) {
            throw error;
        }
    }
}

export default ProductService;