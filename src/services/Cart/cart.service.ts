import axiosAuth from '@/lib/axios';

const CartService = {
    getUserCarts: async (userId: string | string[]): Promise<any> => {
        try {
            const response = await axiosAuth.get<any>(`/carts/user/1`)
            return response.data
        } catch(error) {
            // console.error('Erreur lors du chargement de la liste des classes:', error);
            throw error;
        }   
    }
}

export default CartService;