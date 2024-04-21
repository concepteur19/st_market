import axiosAuth from '@/lib/axios';

const CategoryService = {
    getCategories: async (): Promise<any> => {
        try {
            const response = await axiosAuth.get<any>(`/products/categories`)
            return response.data
        } catch(error) {
            // console.error('Erreur lors du chargement de la liste des classes:', error);
            throw error;
        }   
    }
}

export default CategoryService;