import axiosAuth from '@/lib/axios';

const AuthService = {
    login: async (user: {username: string, password: string}): Promise<any> => {
        try {
            const response = await axiosAuth.post<any>(`/auth/login`, user)
            return response.data
        } catch(error) {
            // console.error('Erreur lors du chargement de la liste des classes:', error);
            throw error;
        }   
    }
}

export default AuthService;
